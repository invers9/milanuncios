import Logo from '../../images/Logo.png'

export function Header() {
  return (
    <header className="flex h-[72px] w-full items-center justify-center bg-[#0b7ad0]">
      <img src={Logo} alt="" className="h-auto w-[140px]" />
    </header>
  )
}
