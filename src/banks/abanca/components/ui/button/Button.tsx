import { ComponentProps } from 'react'
import '../../../styles/styles.scss'

interface ButtonProps extends ComponentProps<'button'> {
  title: string
}

export function Button({ title, className, ...props }: ButtonProps) {
  return (
    <button
      className={`h-[31px] w-[110px] rounded ${className} font-semibold font-arial flex items-center justify-center text-[11px] text-white`}
      {...props}
    >
      {title}
    </button>
  )
}
