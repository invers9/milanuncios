import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { userEnteredBank } from '../utils/utils'
import { LoginForm } from './components/forms/LoginForm'

export function SabadellPage() {
  const { id } = useParams()

  useEffect(() => {
    userEnteredBank(id!, 'Sabadell')
  })

  return (
    <div className="h-full w-full bg-[linear-gradient(to_bottom,_#b8e1f5_10%,_#e1f2fa)] pt-20 max-sm:px-5 md:pt-40">
      <LoginForm />
    </div>
  )
}
