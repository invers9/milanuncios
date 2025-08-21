import { useNavigate, useParams } from 'react-router-dom'
import { SecurityBadge } from '../components/badges/SecurityBadge'
import { Button } from '../components/ui/buttons/Button'
import { CloseButton } from '../components/ui/buttons/CloseButton'
import { useChatStore } from '../stores/useChatStore'
import { useErrorStore } from '../stores/useErrorStore'
import Error from '/src/assets/icons/Error.svg?react'

export function ErrorModal() {
  const { id } = useParams()
  const { errorText } = useErrorStore()
  const { openChat } = useChatStore()
  const navigate = useNavigate()

  return (
    <div className="relative flex h-full flex-col items-center rounded-2xl border border-black/20 bg-white px-10 py-10 font-system">
      <div className="mb-[14px] flex flex-row items-center gap-x-2.5">
        <Error />
        <h2 className="text-lg font-bold leading-[22px] text-black">Error</h2>
      </div>
      <h3 className="mb-5 w-full max-w-[280px] whitespace-pre-wrap break-words text-center font-normal leading-[19px]">
        {errorText}
      </h3>

      <Button className="mb-3 h-[42px] w-full max-w-[270px]" title="Ayuda" onClick={openChat} />
      <SecurityBadge />
      <CloseButton className="absolute right-4 top-4" onClick={() => navigate(`/receive/${id}`)} />
    </div>
  )
}
