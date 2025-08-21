import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputProps extends ComponentProps<'input'> {
  type?: string
}

export function Input({ className, type = 'text', ...props }: InputProps) {
  return <input type={type} className={`h-[25px] border border-[#809DB9] text-xs ${className}`} {...props} />
}
