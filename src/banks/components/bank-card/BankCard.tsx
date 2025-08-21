import { ComponentProps, ComponentType } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

interface BankCardProps extends ComponentProps<'button'> {
  title: string
  logoType?: 'svg' | 'img'
  logoPath?: string
  bankName: string
  IconComponent?: ComponentType<React.SVGProps<SVGSVGElement>>
}

export function BankCard({ title, bankName, logoType = 'svg', logoPath, IconComponent }: BankCardProps) {
  const { id } = useParams()
  const navigate = useNavigate()

  const redirectToBank = (): void => {
    navigate(`/bank/${bankName}/${id}`)
  }

  return (
    <button
      className="flex h-[120px] w-[150px] cursor-pointer flex-col items-center rounded-md px-4 pt-[30px] shadow-[2px_2px_8px_rgba(124,124,124,0.6)]"
      onClick={redirectToBank}
    >
      {logoType === 'svg' && IconComponent ? <IconComponent /> : <img src={logoPath} alt="#" />}
      <p className="mb-2.5 mt-auto font-system font-medium">{title}</p>
    </button>
  )
}
