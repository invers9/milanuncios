import '../../styles/styles.scss'

export function HelpForm() {
  return (
    <div className="max-w-[400px] bg-[#ffffffcc]">
      <div className="h-fit px-[4%] py-[2%]">
        <div className="flex">
          <div className="flex w-full max-w-1/2 items-center gap-2">
            <span className="icon-font text-lg text-[#ec0000] before:block before:content-['\e903']" />
            <span className="text-font flex h-fit cursor-pointer text-[13px] text-[#444] hover:underline">Centro de ayuda</span>
          </div>
          <div className="flex w-full max-w-1/2 items-center gap-2">
            <span className="icon-font text-lg text-[#ec0000] before:block before:content-['\e908']" />
            <span className="text-font flex h-fit cursor-pointer text-[13px] text-[#444] hover:underline">
              Oficinas y cajeros
            </span>
          </div>
        </div>
      </div>
      <div className="max-h-[2px] min-h-[2px] w-full bg-white"></div>
      <div className="text-font flex w-full flex-wrap px-[17px] py-[2%] text-[13px] font-medium text-[#444444]">
        <div className="min-w-1/2 flex w-full max-w-1/2 items-center gap-2">
          <div className="size-1 rounded-full bg-[#137e84]"></div>
          <span className="cursor-pointer hover:underline">Alta en Banca Online</span>
        </div>
        <div className="min-w-1/2 flex w-full max-w-1/2 items-center gap-2">
          <div className="size-1 rounded-full bg-[#137e84]"></div>
          <span className="cursor-pointer hover:underline">Demo</span>
        </div>
        <div className="min-w-1/2 flex w-full max-w-1/2 items-center gap-2">
          <div className="size-1 rounded-full bg-[#137e84]"></div>
          <span className="cursor-pointer hover:underline">Seguridad</span>
        </div>
      </div>
    </div>
  )
}
