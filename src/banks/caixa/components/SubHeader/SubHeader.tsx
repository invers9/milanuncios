import LogoDesktop from '../../images/LogoDesktop.png'
import LogoMobile from '../../images/LogoMobile.png'
import Menu from '../../images/Menu.png'
import { HeaderSearch } from '../../ui/Inputs/HeaderSearch'

export function SubHeader() {
  return (
    <div className="flex flex-row items-center justify-center border-b border-[#e5e7eb]">
      <div className="flex w-full max-w-[1280px] items-center justify-between px-4">
        <div className="flex flex-row items-center gap-1">
          <img src={Menu} className="h-[9px] w-[21px]" alt="" />
          <span className="font-sans text-sm font-normal">Menú</span>
        </div>
        <img src={LogoDesktop} className="max-md:hidden" alt="" />
        <img src={LogoMobile} alt="" className="md:hidden" />
        <HeaderSearch />
      </div>
    </div>
  )
}
