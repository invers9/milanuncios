import { ComponentProps } from 'react'
import '../../../styles/styles.scss'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface DocumentInputProps extends ComponentProps<'input'> {}

export function DocumentInput({ ...props }: DocumentInputProps) {
  return (
    <div className="h-[50px] max-w-[54%] border-b border-[#8cbabd] bg-[#f6f6f6] p-[5px]">
      <div className="flex h-full w-full flex-col pl-[5px]">
        <span className="text-font mb-1 text-xs text-[#767676]">Nº de documento</span>
        <input type="text" className={`text-font bg-transparent text-xs outline-none`} {...props} />
      </div>
    </div>
  )
}
