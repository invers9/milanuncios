import '../../../styles/styles.scss'

import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  title: string
  type?: string
}

export function Input({ type = 'text', className, title, ...props }: InputProps) {
  return (	
    <div className={className}>
      <h1 className="font-ibercaja mb-2 text-xs font-medium text-[#33393E]">{title}</h1>
      <input
        type={type}
        {...props}
        className={`w-full rounded-sm border border-[#33393E] px-[15px] pb-4 pt-[18px] text-[13px] font-normal text-[#33393E] outline-none focus:border-2 focus:border-[#0b7ad0]`}
      />
    </div>
  )
}
