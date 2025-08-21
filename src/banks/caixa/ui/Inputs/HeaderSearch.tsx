import Search from '../../images/Search.png'

export function HeaderSearch() {
  return (
    <div className="relative">
      <img src={Search} alt="" className="left-2 top-[10px] md:absolute" />
      <input type="text" className="border-b border-[#555555] bg-[#f8f8f8] py-2 pl-8 pr-16 outline-none hidden md:block" />
      <button className="absolute right-0 top-2 hidden px-2 text-sm font-semibold md:block">Buscar</button>
    </div>
  )
}
