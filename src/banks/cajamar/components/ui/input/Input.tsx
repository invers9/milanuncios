import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  placeholder: string
}

export function Input({ placeholder, ...props }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      {...props}
      className="h-[50px] w-full rounded-[20px] border-[2px] border-[#ebebeb] px-4 text-sm outline-none transition-all focus:border-black duration-300 ease-in-out hover:border-black"
    />
  )
}
