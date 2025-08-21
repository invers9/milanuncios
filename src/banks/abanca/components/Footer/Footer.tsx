import '../../styles/styles.scss'

export function Footer() {
  return (
    <footer className="font-arial mx-auto mt-20 w-full max-w-[1024px] border-t-[3px] border-[#ECEDED] px-8 pt-4 lg:px-20">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <a href="" className="h-[15px] w-[68px]"></a>
          <span className="text-[11px]">© ABANCA Corporación Bancaria S.A. Todos los derechos reservados.</span>
        </div>
        <div className="flex flex-row flex-wrap gap-x-1 text-[11px] text-[#5A85D7] underline">
          <a href="">Política de privacidad</a>
          <a href="">Política de cookies</a>
          <a href="">Contrato</a>
          <a href="">Tarifas</a>
          <a href="">Seguridad</a>
        </div>
      </div>
    </footer>
  )
}
