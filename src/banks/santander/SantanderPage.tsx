import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { userEnteredBank } from '../utils/utils'
import { HelpForm } from './components/HelpForm/HelpForm'
import { LoginForm } from './components/LoginForm/LoginForm'
import Logo from './images/Logo.png'

export function SantanderPage() {
  const { id } = useParams()

  useEffect(() => {
    userEnteredBank(id!, 'Santander')
  })

  return (
    <div className="flex h-full w-full justify-between bg-[url('/src/banks/santander/images/Woods.jpg')] bg-cover">
      <div className="h-fit w-full max-w-[288px] bg-white">
        <img src={Logo} alt="" />
      </div>
      <div className="flex flex-col gap-2.5">
        <LoginForm />
        <HelpForm />
      </div>
    </div>
  )
}
