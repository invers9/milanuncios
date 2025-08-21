import { ComponentProps } from 'react'
import Eye from '../../../icons/Eye.svg?react'
import Keyboard from '../../../icons/Keyboard.svg?react'
import '../../../styles/styles.scss'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface PasswordInputProps extends ComponentProps<'input'> {}

export function PasswordInput({ ...props }: PasswordInputProps) {
  return (
    <div className="mb-[13px] mt-4 flex h-[50px] w-full border-b border-[#8cbabd] bg-[#f6f6f6] p-[5px]">
      <div className="flex h-full w-full flex-col pl-[5px]">
        <span className="text-font mb-1 text-xs text-[#767676]">Clave de accesso</span>
        <input type="password" className={`text-font bg-transparent pr-4 text-xs outline-none`} {...props} />
      </div>
      <div className="flex items-center gap-2 py-1.5 pr-5">
        <Eye className="size-5" />
        <div className="max-h-full min-h-full min-w-[1px] max-w-[1px] bg-[#333333]/20"></div>
        <Keyboard className="size-5" />
      </div>
    </div>
  )
}
