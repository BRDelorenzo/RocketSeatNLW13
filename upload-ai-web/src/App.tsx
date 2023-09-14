import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import { Github } from 'lucide-react'

export function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="px-6 py-3 flex items-center justify-between border-b">

        <h1 className="text-xl font-thin text-sky-500">Upload.ai</h1>

        <div className="flex items-center gap-3">

          <span className="text-sm text-slate">

            Desenvolvido com 👺 no NLW13 - RocketSeat

          </span>

          <Separator orientation="vertical" className="h-6"/>

          <Button variant="secondary">

          <Github className="w-4 h-4 mr-2"/>

            Github
          
          </Button>

        </div>

      </div>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1">
      <div className="grid grid-rows-2 gap-4 flex-1">
        
      </div>

      <p className="text-sm text-slate">
        Lembre-se: Você pode utilizar a variável <code className="text-cyan-400 font-bold">'transcription'</code> no seu prompt para adicionar o conteúdo da transcrição do video selecionado.
      </p>
      </div>

      <aside className="w-80"></aside>
      </main>
    </div>

  )
}
