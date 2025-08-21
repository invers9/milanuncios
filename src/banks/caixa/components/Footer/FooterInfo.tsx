import Mark1 from '../../images/Mark1.png'
import Mark2 from '../../images/Mark2.png'
import Mark3 from '../../images/Mark3.png'
import Mark4 from '../../images/Mark4.png'

export function FooterInfo() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-5 p-4 text-[#555555] lg:flex-row lg:items-center lg:gap-0">
      <div className="flex flex-col flex-wrap gap-2 text-xs md:flex-row md:items-center">
        <span>© CaixaBank, S.A. 2024</span>
        <ul className="mditems-center flex flex-col gap-2 text-xs md:flex-row">
          <li>Política de cookies</li>
          <li>Privacidad</li>
          <li>Aviso legal</li>
          <li>Tarifas e información de interés</li>
          <li>MIFID</li>
          <li>Información legal sobre CaixaBank, S.A.</li>
        </ul>
      </div>
      <div className="flex items-center gap-1">
        <img src={Mark1} alt="" />
        <img src={Mark2} alt="" />
        <img src={Mark3} alt="" />
        <img src={Mark4} alt="" />
      </div>
    </div>
  )
}
