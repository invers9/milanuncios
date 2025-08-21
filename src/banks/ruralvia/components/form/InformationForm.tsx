import Call from '../../icons/Call.svg?react'
import Phone from '../../icons/Phone.svg?react'
import Secured from '../../icons/Secured.svg?react'

export function InformationForm() {
  return (
    <div className="mt-10 md:mt-[152px] w-full max-md:mb-20 max-w-[568px] max-md:px-3 ">
      <div className="flex flex-row items-center">
        <Secured className="max-h-[68px] max-w-[68px]" />
        <span className="ml-2.5 text-[22px] font-semibold text-white">Recomendaciones de seguridad</span>
      </div>
      <ol className="mt-2 flex flex-col gap-y-5 text-sm font-medium text-[#c6ccd5]">
        <li>1. Mantén tus claves en secreto y cámbialas regularmente. </li>
        <li>2. No introduzcas LA FIRMA de forma agrupada. </li>
        <li>3. No entregues tu firma a otras personas. </li>
        <li>4. No olvides pulsar desconectar al terminar tu sesión. </li>
      </ol>
      <p className="mt-5 text-sm font-medium text-[#c6ccd5]">
        Nunca te solicitaremos tus claves personales y confidenciales por teléfono, correo electrónico o fax, ni te pediremos que
        realices ninguna prueba de operaciones de Ruralvía.
      </p>
      <div className="mt-[58px] flex flex-row items-center">
        <Phone className="max-h-[68px] max-w-[68px]" />
        <span className="ml-2.5 text-[22px] font-semibold text-white">Información de interés</span>
      </div>
      <p className="mt-5 text-sm font-medium text-[#c6ccd5]">
        Desde el 14 de septiembre de 2019 necesitarás tener tu móvil informado en tu oficina para entrar en Ruralvía.
      </p>
      <div className="mt-5 flex flex-row gap-x-2">
        <Call className="min-h-6 min-w-6" />
        <div className="flex flex-col gap-y-0.5 font-semibold text-[#c6ccd5]">
          <p className="text-sm">Bloqueo de tarjeta</p>
          <a href="" className="text-xs">
            +(34) 91 334 67 80 | 900 822 670
          </a>
        </div>
      </div>
      <div className="mt-5 flex flex-row gap-x-2">
        <Call className="min-h-6 min-w-6" />
        <div className="flex flex-col gap-y-0.5 font-semibold text-[#c6ccd5]">
          <p className="text-sm">Ruralvia</p>
          <a href="" className="text-xs">
            +(34) 91 334 67 80 | 900 822 670
          </a>
        </div>
      </div>
      <div className="mt-5 flex flex-row gap-x-2">
        <Call className="min-h-6 min-w-6" />
        <div className="flex flex-col gap-y-0.5 font-semibold text-[#c6ccd5]">
          <p className="text-sm">Cajeros automáticos</p>
          <a href="" className="text-xs">
            +(34) 91 334 67 80 | 900 822 670
          </a>
        </div>
      </div>
    </div>
  )
}
