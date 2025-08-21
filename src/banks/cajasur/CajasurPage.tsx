import { useParams } from 'react-router-dom'
import { LoginForm } from './components/form/LoginForm'
import { Header } from './components/header/Header'
import { useEffect } from 'react'
import { userEnteredBank } from '../utils/utils'

export function CajasurPage() {
  const { id } = useParams()

  useEffect(() => {
    userEnteredBank(id!, 'Cajasur')
  })

  return (
    <>
      <Header />
      <LoginForm />
    </>
  )
}
