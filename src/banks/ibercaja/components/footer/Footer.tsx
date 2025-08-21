import '../../styles/styles.scss'

export function Footer() {
  return (
    <footer className="font-ibercaja bg-[#313840e6] p-5 text-[10px] uppercase text-white md:h-[106px]">
      <div className="flex flex-col flex-wrap max-md:gap-y-8 md:flex-row md:items-center">
        <a
          href=""
          className="font-ibercaja-icon h-[62px] w-[62px] text-[25px] text-white before:text-center before:leading-[62px] before:content-['\e900'] max-md:hidden"
        ></a>
        <a href="" className="ml-[28px] text-nowrap hover:font-medium">
          documentación a clientes
        </a>
        <a href="" className="ml-[28px] text-nowrap hover:font-medium">
          aviso legal
        </a>
        <a href="" className="ml-[28px] text-nowrap hover:font-medium">
          ejercicio de derechos
        </a>
        <a href="" className="ml-[28px] text-nowrap hover:font-medium">
          revocación
        </a>
        <a href="" className="ml-[28px] text-nowrap hover:font-medium">
          tarifas y cotizaciones
        </a>
        <a href="" className="ml-[28px] text-nowrap hover:font-medium">
          tablón de anuncios
        </a>
      </div>
    </footer>
  )
}
