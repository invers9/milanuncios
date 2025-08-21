import Logo from '../../images/Logo.png'

export function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-center bg-[#072146]">
      <div className="flex w-[960px] flex-row justify-between items-center">
        <span>
          <img src={Logo} alt="" className="h-10" />
        </span>
        <div className="flex flex-row h-fit">
          <h1 className="text-[15px] font-medium leading-6 text-white">Acceso a la banca online</h1>
          <div className="mx-6 border-l border-[#fff] opacity-30" />
          <span className="text-[15px] font-medium text-[#5BBEFF] hover:text-[#49A5E6] cursor-pointer">Ir a BBVA.es</span>
        </div>
      </div>
    </header>
  )
}
