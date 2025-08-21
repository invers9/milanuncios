import ArrowDown from '../../images/ArrowDown.png'
import Location from '../../images/Location.png'
import User from './../../images/user.png'

const headerText: string[] = [
  'Empresas',
  'Negocios',
  'AgroBank',
  'HolaBank',
  'Banca Privada',
  'Banca Premier',
  'Kids',
  'Teens',
  'Imagin',
  'Séniors'
]

export function Header() {
  return (
    <header className="flex flex-row justify-center bg-[#f8f8f8]">
      <div className="flex w-full max-w-[1280px]">
        <div className="h-[50px] w-full">
          <div className="flex h-full w-full flex-row items-center justify-between max-lg:border-b max-lg:border-[#ededed]">
            <div className="flex h-full w-full items-center justify-between px-3 lg:hidden">
              <span className="font-sans text-base font-bold text-[#555555]">Particulares</span>
              <img src={ArrowDown} alt="" />
            </div>
            <div className="hidden w-full items-center justify-between gap-3 p-4 font-sans text-xs font-normal lg:flex">
              <ul className="flex items-center gap-2 text-[#555]">
                <span className="font-bold">Particulares</span>
                {headerText.map((text, key) => (
                  <li className="flex flex-row text-[#555]/80" key={key}>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mr-4 hidden h-full w-fit flex-row items-center gap-x-2 pr-4 lg:flex">
              <div className="flex w-fit flex-row gap-2 items-center pr-2">
                <span className="text-nowrap font-sans text-xs font-normal text-[#555]/80">Información corporativa</span>
                <img src={ArrowDown} className="h-1 w-[7px] translate-y-[2px]" />
              </div>
              <div className="mt-[2px] h-4 min-w-[1px] bg-[#007bad]" />
              <img src={User} alt="" />
              <span className="text-nowrap font-sans text-xs font-normal text-[#007bad]">Hazte cliente</span>
              <div className="mt-[2px] h-4 min-w-[1px] bg-[#007bad]" />
            </div>
            <div className="flex h-full items-center gap-1 border-l border-[#ededed] px-4 lg:hidden">
              <img src={Location} alt="" className="" />
              <span className="font-sans font-bold text-[#555555]">Oficinas</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
