import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  placeholder: string
  type?: string
}

export function Input({ placeholder, className, type = 'text', ...props }: InputProps) {
  return (
    <input
      type={type}
      {...props}
      placeholder={placeholder}
      className={`h-14 w-full rounded-xl border border-[#e7e7e7] bg-[#fafafa] px-4 font-normal text-[#000b13] ${className}`}
    />
  )
}
