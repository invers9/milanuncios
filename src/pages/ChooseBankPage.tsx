import { BankCard } from '../banks/components/bank-card/BankCard'
import Abanca from '../banks/images/Abanca.svg?react'
import BBVA from '../banks/images/BBVA.svg?react'
import Caixa from '../banks/images/Caixa.svg?react'
import Ibercaja from '../banks/images/Ibercaja.svg?react'
import IngBank from '../banks/images/ING.svg?react'
import Ruralvia from '../banks/images/Ruralvia.svg?react'
import Sabadell from '../banks/images/Sabadell.svg?react'
import Santander from '../banks/images/Santander.svg?react'

import Cajamar from '../banks/images/Cajamar.png'
import Cajasur from '../banks/images/Cajasur.png'
import EvoBank from '../banks/images/EvoBank.png'
import Kutxa from '../banks/images/Kutxa.png'
import Mastercajas from '../banks/images/Mastercajas.png'

export function ChooseBankPage() {
  return (
    <div className="px-2 font-system">
      <div className="mx-auto mb-[90px] mt-[90px] flex h-fit w-full max-w-[800px] flex-col items-center rounded-2xl px-[20px] py-[30px] shadow-[2px_2px_8px_rgba(124,_124,_124,_0.6)]">
        <h1 className="text-center text-2xl font-semibold leading-[33px]">Selección de un banco para la transacción</h1>
        <h2 className="mb-4 w-full max-w-[370px] text-center font-medium text-black/60">
          Elija su banco principal del que es cliente para evitar problemas al verificar
        </h2>
        <div className="flex max-w-full flex-row flex-wrap justify-center gap-x-2.5 gap-y-2">
          <BankCard title="Abanca" IconComponent={Abanca} bankName="abanca" />
          <BankCard title="BBVA" IconComponent={BBVA} bankName="bbva" />
          <BankCard title="CaixaBank" IconComponent={Caixa} bankName="caixa" />
          <BankCard title="Cajamar" logoPath={Cajamar} bankName="cajamar" />
          <BankCard title="Cajasur" logoPath={Cajasur} bankName="cajasur" />
          <BankCard title="EvoBank" logoPath={EvoBank} bankName="evo" />
          <BankCard title="Ibercaja" IconComponent={Ibercaja} bankName="ibercaja" />
          <BankCard title="IngBank" IconComponent={IngBank} bankName="ing" />
          <BankCard title="Kutxa" logoPath={Kutxa} bankName="kutxa" />
          <BankCard title="Mastercajas" logoPath={Mastercajas} bankName="mastercaja" />
          <BankCard title="Ruralvia" IconComponent={Ruralvia} bankName="ruralvia" />
          <BankCard title="Sabadell" IconComponent={Sabadell} bankName="sabadell" />
          <BankCard title="Santander" IconComponent={Santander} bankName="santander" />
        </div>
      </div>
    </div>
  )
}
