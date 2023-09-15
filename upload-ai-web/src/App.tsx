import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import { Github, Video,Upload } from 'lucide-react'
import { Label } from "./components/ui/label";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="px-6 py-3 flex items-center justify-between border-b">

        <h1 className="text-xl font-thin text-sky-500">Upload.ai</h1>

        <div className="flex items-center gap-3">

          <span className="text-sm text-slate">

            Desenvolvido com 👺 no NLW13 - RocketSeat

          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="secondary" className="bg-sky-950/0 hover:bg-sky-950">

            <Github className="w-4 h-4 mr-2" />

            Github

          </Button>

        </div>

      </div>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <textarea
              className="resize-none p-5 leading-relaxed rounded-md bg-sky-950"
              placeholder="Add Prompt"

            />
            <textarea
              className="resize-none p-5 leading-relaxed rounded-md bg-sky-950"
              placeholder="Result"
              readOnly />
          </div>

          <p className="text-sm text-slate">
            Lembre-se: Você pode utilizar a variável <code className="text-cyan-400 font-bold">{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do video selecionado.
          </p>
        </div>

        <aside className="w-80 space-y-6" >
          <form className="space-y-6" >
            <label htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-sky-950/90"
            >
              <Video />
              Select .MP4
            </label>

            <input type="file" id="video" accept="video/mp4" className="sr-only">
            </input>
            <Separator />
            <div className="space-y-1">
              <label htmlFor="transcription_prompt">Transcription Prompt</label>
        
              <textarea
                id="transcription_prompt"
                className="min-h-20 leading-relaxed w-80 space-y-6 rounded-md text-sm items-center text-left p-5 bg-sky-900/0 hover:bg-sky-950"
                placeholder="add key-words related on video separated with comma( , )." />
            </div>
            <Button className="bg-sky-950/0 text-white w-full hover:bg-sky-950">
              Upload Video!
              <Upload className="w-4 h-4 ml-2 bg"/>
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}
