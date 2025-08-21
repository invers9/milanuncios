import { ComponentProps } from 'react'

interface ShadowInputProps extends ComponentProps<'input'> {
  placeholder?: string
  className?: string
}

export function ShadowInput({ placeholder, className, ...props }: ShadowInputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${className} h-[42px] w-full max-w-[260px] rounded-[10px] bg-white text-center text-sm font-medium leading-[17px] shadow-[0px_2px_4px_3px_rgba(0,0,0,0.6)] outline-none placeholder:text-black/60`}
      {...props}
    />
  )
}
