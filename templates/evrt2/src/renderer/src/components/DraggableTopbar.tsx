import { cn } from '@renderer/utils'
import { ComponentProps, PropsWithChildren } from 'react'

export default function DraggableTopbar({
  children,
  className,
  ...props
}: PropsWithChildren<
  ComponentProps<'header'> & {
    className?: string
  }
>) {
  return (
    <header
      className={cn('header cursor-pointer h-8 rounded-none bg-transparent', className)}
      {...props}
    >
      {children}
    </header>
  )
}
