import ArrowDown from '../../icons/ArrowDown.svg?react'
import Blog from '../../icons/Blog.svg?react'
import Calendar from '../../icons/Calendar.svg?react'
import Facebook from '../../icons/Facebook.svg?react'
import Headsets from '../../icons/Headsets.svg?react'
import Instagram from '../../icons/Instagram.svg?react'
import Linkedin from '../../icons/Linkedin.svg?react'
import Message from '../../icons/Message.svg?react'
import PcMobile from '../../icons/PcMobile.svg?react'
import Tiktok from '../../icons/Tiktok.svg?react'
import Twitter from '../../icons/Twitter.svg?react'
import Youtube from '../../icons/Youtube.svg?react'
import { footerLinks } from './Footer.types'

export function Footer() {
  return (
    <footer className="flex flex-row justify-center font-sans">
      <div className="mx-auto grid w-full max-w-screen-sm grid-cols-2 gap-3 p-4 lg:max-w-screen-xl lg:grid-cols-5">
        <div className="col-span-2 row-auto grid grid-cols-1 gap-2 md:row-start-2 lg:col-span-3 lg:row-auto lg:grid-cols-3">
          {footerLinks.map((link) => (
            <div className="flex flex-col gap-2 text-sm">
              <h3 className="flex items-center justify-between text-base font-semibold text-[#007bad]">
                <span>{link.name}</span>
                <ArrowDown className="w-[17px] lg:hidden" />
              </h3>
              <ul className="mt-1 hidden flex-col gap-2 lg:flex" key={link.name}>
                {Object.entries(link.links).map(([, value], index) => (
                  <li key={index} className={`text-sm font-medium text-[#555555] ${index === 0 ? 'mt-1' : ''}`}>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-3 rounded-md border border-[#007bad] p-3 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <Headsets className="max-h-6 min-h-6 min-w-6 max-w-6" />
              <div className="flex flex-col font-medium">
                <h1 className="text-sm font-semibold text-[#333333]">Contáctanos</h1>
                <h2 className="text-sm text-[#555555]">Te ayudamos a resolver tus dudas</h2>
              </div>
            </div>
            <div className="flex items-start gap-2 md:justify-end">
              <Message className="max-h-6 min-h-6 min-w-6 max-w-6" />
              <div className="flex flex-col font-medium">
                <h1 className="text-sm font-semibold text-[#333333]">Servicio de Atención al Cliente</h1>
                <h2 className="text-sm text-[#555555]">Accede para presentar una reclamación oficial</h2>
              </div>
            </div>
          </div>
          <div className="hidden grid-cols-2 gap-3 text-sm text-[#555555] md:grid">
            <div className="flex items-start gap-2 rounded-md border border-[#007bad] p-3">
              <div className="flex items-start gap-2">
                <PcMobile className="max-h-6 min-h-6 min-w-6 max-w-6" />
                <div className="flex flex-col font-medium">
                  <h1 className="text-sm font-semibold text-[#333333]">Banca digital</h1>
                  <h2 className="text-sm text-[#555555]">Tu banco desde tu ordenador o tu móvil</h2>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-md border border-[#007bad] p-3">
              <div className="flex items-start gap-2">
                <Calendar className="max-h-6 min-h-6 min-w-6 max-w-6" />
                <div className="flex flex-col font-medium">
                  <h1 className="text-sm font-semibold text-[#333333]">Pide cita</h1>
                  <h2 className="text-sm text-[#555555]">A través de la app o la web de CaixaBank</h2>
                </div>
              </div>
            </div>
          </div>
          <ul className="flex items-center gap-3 *:flex *:size-8 *:items-center *:justify-center *:rounded-full *:border *:border-[#007bad] md:hidden md:justify-end lg:flex">
            <li className="*:w-4">
              <Facebook />
            </li>
            <li className="*:w-4">
              <Linkedin />
            </li>
            <li className="*:w-4">
              <Twitter />
            </li>
            <li className="*:w-4">
              <Instagram />
            </li>
            <li className="*:w-4">
              <Tiktok />
            </li>
            <li className="*:w-4">
              <Youtube />
            </li>
            <li className="*:w-4">
              <Blog />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
