import { ComponentProps } from 'react'
import Send from '../../../assets/icons/Send.svg?react'

interface CustomErrorInputProps extends ComponentProps<'input'> {
  placeholder?: string
  className?: string
  callback: () => void
}

export function CustomErrorInput({ placeholder, className, callback, ...props }: CustomErrorInputProps) {
  return (
    <div
      className={`${className} flex h-[42px] w-full max-w-[280px] items-center rounded-[10px] bg-white pl-5 pr-3 text-center text-sm font-medium leading-[17px] shadow-[0px_2px_4px_3px_rgba(0,0,0,0.6)]`}
    >
      <input
        type="text"
        placeholder={placeholder}
        className={`h-full w-full rounded-[10px] outline-none placeholder:text-black/60`}
        {...props}
      />
      <Send className="cursor-pointer select-none max-w-5 max-h-5 w-full h-full" onClick={callback} />
    </div>
  )
}
