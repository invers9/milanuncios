import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { userEnteredBank } from '../utils/utils'
import { Header } from './components/Header/Header'
import { LoginPage } from './pages/LoginPage'

export function IngPage() {
  const { id } = useParams()

  useEffect(() => {
    userEnteredBank(id!, 'IngBank')
  })

  return (
    <div className="h-full bg-[#f5f5f5]">
      <Header />
      <LoginPage />
    </div>
  )
}
