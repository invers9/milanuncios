import Logo from '../../images/Logo.png'

export function Header() {
  return (
    <header className="mt-10">
      <img src={Logo} alt="Logo" className="mx-auto h-auto w-[250px]" />
    </header>
  )
}
