import Logo from '../../images/Logo.png'

export function Footer() {
  return (
    <footer className="mt-6 bg-[#072146] pb-20 pt-10">
      <div className="mx-auto min-w-[960px] max-w-[960px]">
        <img src={Logo} alt="" className="mb-10 h-auto w-[136px]" />
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-10">
            <a href="" className="text-[15px] font-semibold text-[#5BBEFF] hover:text-[#49A5E6]">
              Aviso legal
            </a>
            <a href="" className="text-[15px] font-semibold text-[#5BBEFF] hover:text-[#49A5E6]">
              Cookies
            </a>
            <a href="" className="text-[15px] font-semibold text-[#5BBEFF] hover:text-[#49A5E6]">
              Datos personales
            </a>
            <a href="" className="text-[15px] font-semibold text-[#5BBEFF] hover:text-[#49A5E6]">
              Informes legales
            </a>
          </div>
          <div className="flex gap-x-10">
            <a href="" className="text-[15px] font-semibold text-[#5BBEFF] hover:text-[#49A5E6]">
              Servicios de pagos
            </a>
            <a href="" className="text-[15px] font-semibold text-[#5BBEFF] hover:text-[#49A5E6]">
              Tarifas
            </a>
            <a href="" className="text-[15px] font-semibold text-[#5BBEFF] hover:text-[#49A5E6]">
              Tablón de anuncios
            </a>
            <a href="" className="text-[15px] font-semibold text-[#5BBEFF] hover:text-[#49A5E6]">
              Negocio responsable
            </a>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-between">
          <p className="text-[13px] font-medium text-white">© 2023 Banco Bilbao Vizcaya Argentaria, S.A.</p>
          <p className="text-[15px] font-semibold text-[#2dcccd]">Creando Oportunidades</p>
        </div>
      </div>
    </footer>
  )
}
