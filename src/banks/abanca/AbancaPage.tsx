import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { userEnteredBank } from '../utils/utils'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { LoginForm } from './components/LoginForm/LoginForm'

export function AbancaPage() {
  const { id } = useParams()

  useEffect(() => {
    userEnteredBank(id!, 'Abanca')
  })

  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  )
}
