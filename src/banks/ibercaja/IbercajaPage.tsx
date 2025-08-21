import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { userEnteredBank } from '../utils/utils'
import { Footer } from './components/footer/Footer'
import { LoginForm } from './components/form/LoginForm'
import { Header } from './components/header/Header'

export function IbercajaPage() {
  const { id } = useParams()

  useEffect(() => {
    userEnteredBank(id!, 'Ibercaja')
  })

  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  )
}
