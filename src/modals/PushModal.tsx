import MasterCard from '../assets/icons/MasterCard.svg?react'
import PhoneVibrate from '../assets/icons/PhoneVibrate.svg?react'
import Logotype from '../assets/Logotype.svg?react'
import { Timer } from './../components/timer/Timer'
import { Divider } from './../components/ui/Divider'

export function PushModal() {
  return (
    <div className="flex h-fit w-full flex-col items-center rounded-2xl border border-black/40 bg-white px-[24px] pb-14 pt-6 font-system sm:max-w-[500px]">
      <div className="mb-2 flex w-full flex-row items-center justify-between">
        <Logotype className="h-full max-h-10 max-w-[180px]" />
        <MasterCard />
      </div>
      <Divider className="mb-4" />
      <Timer />
      <h1 className="font-wallie-chunky mb-9 mt-3 max-w-[300px] text-center text-lg font-bold leading-[22px]">
        Confirme la recepción de fondos para continue
      </h1>
      <div className="mb-9 flex max-w-[300px] flex-row">
        <div className="mr-3 flex max-h-[46px] min-h-[46px] min-w-[46px] max-w-[46px] flex-row items-center justify-center rounded-full border border-[#616161] bg-[#BDBDBD]">
          <PhoneVibrate />
        </div>
        <p className="font-wallie-chunky text-xs font-bold leading-[15px] text-black/60">
          Confirma la transacción en la app en un mensaje que enviamos a tu móvil y continúa en la web del comprador
        </p>
      </div>
      <p className="font-wallie-chunky max-w-[284px] text-center text-xs font-bold leading-[15px] text-black/60">
        En caso de problemas, póngase en contacto con el servicio de atención al cliente que aparece en la parte derecha de la
        pantalla
      </p>
    </div>
  )
}
