import '../../styles/styles.scss'

export function SubHeader() {
  return (
    <div className="w-full bg-[#f4f4f4] p-2">
      <div className="mx-auto w-[960px]">
        <div className="flex items-center gap-x-2">
          <i className="font-icon text-2xl not-italic text-[#666] before:content-['']" />
          <p className="text-xs text-[#666666]">Estás en un entorno con seguridad BBVA</p>
        </div>
      </div>
    </div>
  )
}
