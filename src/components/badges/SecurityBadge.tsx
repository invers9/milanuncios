import Shield from '/src/assets/icons/Shield.svg?react'

export function SecurityBadge() {
  return (
    <div className="flex flex-row items-center gap-x-2.5">
      <Shield />
      <div className="leadign-[17px] flex flex-row items-center gap-x-2 text-sm font-semibold">
        <span className="text-[#29965A]">HTTPS/SSL</span>
        <span className="text-black/60">Conexion segura</span>
      </div>
    </div>
  )
}
