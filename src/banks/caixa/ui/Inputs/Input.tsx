import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputProps extends ComponentProps<'input'> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      type="text"
      className="h-[52px] w-full rounded border-b-2 border-[#666666] bg-[#f6f6f6] p-3 font-semibold outline-none transition-all duration-200 ease-linear focus:border-[#007bad]"
    />
  )
}
