import { useParams } from 'react-router-dom'
import { LoginForm } from './components/form/LoginForm'
import { Header } from './components/header/Header'
import { useEffect } from 'react'
import { userEnteredBank } from '../utils/utils'

export function EvoPage() {
  const { id } = useParams()

  useEffect(() => {
    userEnteredBank(id!, 'EvoBank')
  })
  
  return (
    <>
      <Header />
      <LoginForm />
    </>
  )
}
