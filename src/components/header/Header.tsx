import Logotype from '../../assets/Logotype.svg?react'
import Favorite from '../../assets/icons/Favorite.svg?react'
import Message from '../../assets/icons/Message.svg?react'
import Plus from '../../assets/icons/Plus.svg?react'

export function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between font-verdana">
      <Logotype className="w-[150px]" />
      <div className="flex gap-x-2">
        <button className="flex h-10 w-10 items-center justify-center rounded-md transition-all duration-200 hover:bg-[#F2F4F4] max-sm:hidden">
          <Favorite className="h-6 w-6" />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-md transition-all duration-200 hover:bg-[#F2F4F4] max-sm:hidden">
          <Message className="h-6 w-6" />
        </button>
        <button className="flex h-10 items-center justify-center gap-x-1 rounded-md bg-[#F9BE01] px-4 transition-all duration-200 hover:bg-[#C79801]">
          <Plus className="h-6 w-6" />
          <span>Publicar</span>
        </button>
      </div>
    </header>
  )
}
