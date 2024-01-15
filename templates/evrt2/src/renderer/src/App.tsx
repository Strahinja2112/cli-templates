import { BookOpen, Github, Link } from 'lucide-react'

type TLink = {
  title: string
  url: string
}

const links: TLink[] = [
  {
    title: 'Electron-Vite',
    url: 'https://electron-vite.org'
  },
  {
    title: 'React.js',
    url: 'https://react.dev'
  },
  {
    title: 'Typescript',
    url: 'https://www.typescriptlang.org'
  }
]

export default function App() {
  return (
    <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] flex flex-col gap-[30px] items-center justify-center from-black via-[rgb(5,18,4)] to-black">
      <h1 className="text-[5rem] font-bold tracking-tight">
        Create <span className="text-[rgb(86,154,81)]">EVRT2</span> App
      </h1>
      <div className="flex items-center justify-center gap-5">
        <a
          className="gap-4 text-2xl items-center flex rounded-full group transition bg-white/5 p-2 px-4 hover:bg-white/10"
          href="https://electron-vite.org/guide/"
          target="_blank"
        >
          <BookOpen className="text-[rgb(86,154,81)]" />
          <span>Documentation</span>
        </a>
        <a
          className="gap-4 text-2xl items-center flex rounded-full group transition bg-white/5 p-2 px-4 hover:bg-white/10"
          href="https://github.com/Strahinja2112/electron-tailwind-vite-starter"
          target="_blank"
        >
          <span>Github</span>
          <Github className="text-[rgb(86,154,81)]" />
        </a>
      </div>
      <div className="mt-5 flex flex-col w-full items-center gap-3 justify-center">
        <span className="text-2xl">The best of the TypeScript ecosystem...</span>
        <div className="w-full items-center justify-center flex gap-2 text-sm">
          {links.map((link) => (
            <a
              target="_blank"
              href={link.url}
              className="text-[rgb(86,154,81)] hover:bg-white/10 transition flex gap-2 items-center bg-white/5 px-3 py-2 rounded-full"
            >
              {link.title}
              <Link size={15} />
            </a>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 pb-1 flex text-white/50 items-start justify-center gap-5">
        <div className="flex items-center text-2xl">
          <span className="text-[rgb(86,154,81)] underline font-bold">E</span>
          <span>lectron</span>
        </div>
        <div className="flex items-center text-2xl">
          <span className="text-[rgb(86,154,81)] underline font-bold">V</span>
          <span>ite</span>
        </div>
        <div className="flex items-center text-2xl">
          <span className="text-[rgb(86,154,81)] underline font-bold">R</span>
          <span>eact</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center text-2xl">
            <span className="text-[rgb(86,154,81)] underline font-bold">T</span>
            <span>ypescript</span>
          </div>
          <span>&</span>
          <div className="flex items-center text-2xl">
            <span className="text-[rgb(86,154,81)] underline font-bold">T</span>
            <span>ailwind</span>
          </div>
        </div>
      </div>
    </div>
  )
}
