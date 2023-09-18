import {FastifyInstance } from "fastify"
import { createReadStream } from 'node:fs'
import { prisma } from '../lib/prisma'
import { z } from 'zod'
import { openai } from "../lib/openai"


export async function createTranscriptionRoute(app: FastifyInstance){
    app.post('/videos/:videoID/transcription',async (req)=>{
        const paramsSchema = z.object({
            videoID: z.string().uuid(),
        
        })
        
        const { videoID } = paramsSchema.parse(req.params)

        const bodyschema = z.object({

            prompt: z.string(),

        })

        const { prompt } = bodyschema.parse(req.body)

        const video = await prisma.video.findUniqueOrThrow({
            where: {
                id: videoID,
            }
        })

        const videoPath = video.path
        const audioReadStream = createReadStream(videoPath)

        const response = await openai.audio.transcriptions.create({
            file: audioReadStream,
            model: 'whisper-1',
            language: 'pt',
            response_format: 'json',
            temperature: 0,
            prompt,
        })

        const transcription = response.text


        await prisma.video.update({
            where:{
                id: videoID,
            },
            data: {
                transcription,
            },
        })

        return{ transcription }
    })
}