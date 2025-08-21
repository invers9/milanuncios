import GeoCXB from '../../icons/GeoCXB.svg?react'
import Search from '../../images/Search.png'

export function SubFooter() {
  return (
    <div className="bg-firmBg flex h-[128px] items-center justify-center bg-cover bg-no-repeat p-4">
      <div className="flex items-center gap-5">
        <GeoCXB className="h-12 w-12" />
        <div className="flex items-center gap-2 overflow-hidden rounded-3xl border border-black/80 bg-white">
          <input
            className="w-full max-w-[400px] px-4 py-2 italic outline-none focus:not-italic"
            placeholder="Encuentra tu oficina..."
            type="text"
          />
          <img src={Search} alt="" className='' />
		  <button className='p-3 font-semibold'>Buscar</button>
        </div>
      </div>
    </div>
  )
}
