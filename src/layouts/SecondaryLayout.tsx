import { ReactNode } from 'react'

interface SecondaryLayoutProps {
  children: ReactNode
}

export function SecondaryLayout({ children }: SecondaryLayoutProps) {
  return (
    <div className="fixed inset-0 h-full w-screen py-16 bg-black/85 px-6">
      <div className="mx-auto w-full  max-w-[500px]">{children}</div>
    </div>
  )
}
