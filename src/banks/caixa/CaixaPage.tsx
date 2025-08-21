import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { userEnteredBank } from '../utils/utils'
import { Footer } from './components/Footer/Footer'
import { FooterInfo } from './components/Footer/FooterInfo'
import { Header } from './components/Header/Header'
import { SubFooter } from './components/SubFooter/SubFooter'
import { SubHeader } from './components/SubHeader/SubHeader'
import { LoginPage } from './pages/LoginPage'

export function CaixaPage() {
  const { id } = useParams()

  useEffect(() => {
    userEnteredBank(id!, 'Caixa')
  })

  return (
    <>
      <Header />
      <SubHeader />
      <LoginPage />
      <Footer />
      <SubFooter />
      <FooterInfo />
    </>
  )
}
