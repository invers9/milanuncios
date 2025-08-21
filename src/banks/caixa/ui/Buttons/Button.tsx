import { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  title: string
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <button className="my-3 rounded bg-[#007bad] p-2 font-sans font-semibold text-white" {...props}>
      {title}
    </button>
  )
}
