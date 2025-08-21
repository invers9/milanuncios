import Logo from '../../icons/Logo.svg?react'

export function Header() {
  return (
    <header className="h-[64px] w-full bg-white shadow-[0_2px_2px_0_rgba(0,_0,_0,_0.14),_0_3px_1px_-2px_rgba(0,_0,_0,_0.12),_0_1px_5px_0_rgba(0,_0,_0,_0.2)]">
      <div className="mx-auto flex h-full w-full max-w-[1280px] flex-row items-center justify-between">
        <a href="https://ing.nl">
          <Logo className="h-[30px] w-[118px]" />
        </a>
        <div className="flex font-bold text-[#333333]">
          <span className='cursor-pointer'>ES</span>
          <div className="mx-2 max-h-full min-h-full max-w-[1px] min-w-[1px] bg-black"></div>
          <span className='cursor-pointer text-[#696969]'>EN</span>
        </div>
      </div>
    </header>
  )
}
