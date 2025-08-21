import clsx from 'clsx'
import { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  title: string
}

export function Button({ title, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'h-10 w-full rounded-lg bg-[#11A753] px-4 text-center font-system font-medium text-white transition-colors duration-200 hover:bg-[#0E8642]',
        className
      )}
    >
      {title}
    </button>
  )
}
