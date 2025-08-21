import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { userEnteredBank } from '../utils/utils'
import { LoginForm } from './components/form/LoginForm'
import { Header } from './components/header/Header'

export function CajamarPage() {
  const { id } = useParams()

  useEffect(() => {
    userEnteredBank(id!, 'Cajamar')
  })

  return (
    <>
      <Header />
      <LoginForm />
    </>
  )
}
