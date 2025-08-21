import { ComponentProps } from 'react'

interface PaymentButtonProps extends ComponentProps<'button'> {
  title?: string
  className?: string
  disabled: boolean
}

export function PaymentButton({ title, className, disabled, ...props }: PaymentButtonProps) {
  return (
    <button
      className={`${className} font-system flex h-11 w-full max-w-[380px] items-center justify-center rounded-md bg-[#1867c1] font-normal text-white shadow-[0_0_0_1px_#e0e0e0,0_2px_4px_0_rgba(0,0,0,0.07),0_1px_1.5px_0_rgba(0,0,0,0.05)] transition-all duration-300 disabled:cursor-default disabled:bg-[#d4d3d3]`}
      {...props}
      disabled={disabled}
    >
      <span>{title}</span>
    </button>
  )
}
