import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  title: string
}

export function Input({ title, ...props }: InputProps) {
  return (
    <div className="flex w-full flex-col gap-y-2">
      <h4 className="text-sm text-cyan">{title}</h4>
      <input
        {...props}
        type="text"
        className="font-regular h-9 rounded-full border px-4 text-black/70 outline-black transition-all duration-200 ease-in-out focus:outline-accent"
      />
    </div>
  )
}
