import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  placeholder: string
  maxLength?: number
  type?: string
}

export function Input({ placeholder, type = 'text', maxLength = 100, ...props }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      {...props}
      className="h-10 w-full rounded-[4px] border border-white bg-transparent pl-4 pr-12 text-[13px] font-medium text-white outline-none md:max-w-[468px]"
    />
  )
}
