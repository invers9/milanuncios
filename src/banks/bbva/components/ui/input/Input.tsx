import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  placeholder: string
}

export function Input({ placeholder, ...props }: InputProps) {
  return (
    <div className="relative h-14 border-b border-[#666] bg-[#f4f4f4] focus-within:shadow-[0_0_5px_#1973b8] focus:outline-[2px_solid_rgba(0,_0,_0,_0)]">
      <input
        type="text"
        {...props}
        className="h-full w-full bg-transparent pl-4 pr-12 pt-[30px] text-sm font-medium text-black outline-none"
      />
      <label htmlFor="" className="absolute left-4 top-3 text-[15px] text-sm text-[#666]">
        {placeholder}
      </label>
    </div>
  )
}
