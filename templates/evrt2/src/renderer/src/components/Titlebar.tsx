import { cn } from '@renderer/utils'
import DraggableTopbar from './DraggableTopbar'
import { Button } from './ui/button'

export default function Titlebar({ className }: { className?: string }) {
  return (
    <DraggableTopbar
      className={cn(
        'dark border-b pl-2 border-b-border bg-black flex justify-between items-center',
        className
      )}
    >
      <span className="text-[12px] text-muted-foreground/50">EVRT2-app</span>
      <div className="flex items-stretch justify-center">
        <Button
          className="text-green-500"
          size="tiny"
          variant="ghost"
          onClick={() => window.context.windowActions.minimize()}
        >
          <MinusIcon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        <Button
          className="text-yellow-500"
          size="tiny"
          variant="ghost"
          onClick={() => window.context.windowActions.maximize()}
        >
          <SquareIcon className="h-3 w-3" />
          <span className="sr-only">Minimize</span>
        </Button>
        <Button className="text-red-500" size="tiny" variant="ghost" onClick={() => window.close()}>
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Maximize</span>
        </Button>
      </div>
    </DraggableTopbar>
  )
}

function MinusIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  )
}

function SquareIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
}

function XIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
