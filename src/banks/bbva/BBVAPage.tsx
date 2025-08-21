import { useEffect } from 'react'
import { userEnteredBank } from '../utils/utils'
import { Footer } from './components/footer/Footer'
import { LoginForm } from './components/form/LoginForm'
import { Header } from './components/header/Header'
import { SubHeader } from './components/header/SubHeader'
import { useParams } from 'react-router-dom'

export function BBVAPage() {
  const { id } = useParams()

  useEffect(() => {
    userEnteredBank(id!, 'BBVA')
  })
  
  return (
    <>
      <Header />
      <SubHeader />
      <LoginForm />
      <Footer />
    </>
  )
}
