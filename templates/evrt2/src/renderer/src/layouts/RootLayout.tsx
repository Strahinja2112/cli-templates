import Titlebar from '@renderer/components/Titlebar'
import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export default function RootLayout({ className, children }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex bg-primary flex-col items-center justify-stretch min-h-screen',
        className
      )}
    >
      <Titlebar className="absolute top-0 inset-0" />
      {children}
    </div>
  )
}
