import { ChangeEvent, useCallback, useState } from 'react'
import { formatCardNumber, formatCVV, formatDate, getCardType, getMaxLength } from '../../../utils/card-utils/CardUtils'

import Amex from '../../../assets/icons/Amex.svg?react'
import CvvCard from '../../../assets/icons/CvvCard.svg?react'
import MasterCardIcon from '../../../assets/icons/MasterCardIcon.svg?react'
import UnionPay from '../../../assets/icons/UnionPay.svg?react'
import Visa from '../../../assets/icons/Visa.svg?react'

interface CardInputProps {
  cardNumber: string
  year: string
  month: string
  cvv: string
  title: string
  className?: string
  cardNumberOnChange: (value: string) => void
  monthOnChange: (value: string) => void
  yearOnChange: (value: string) => void
  cvvOnChange: (value: string) => void
}

export function CardInput({
  title,
  className,
  cardNumberOnChange,
  monthOnChange,
  yearOnChange,
  cvvOnChange,
  year,
  month,
  cardNumber,
  cvv
}: CardInputProps) {
  const [cardType, setCardType] = useState<string | null>(null)

  const isCardEntered = () => {
    if (cardNumber.length === 19 && year.length === 2 && month.length === 2) return true
    return false
  }

  const handleInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      let formattedValue = value
      const id = e.target.id

      switch (id) {
        case 'cardNumber':
          formattedValue = formatCardNumber(value)
          cardNumberOnChange(formattedValue)
          break
        case 'year':
          formattedValue = formatDate(value)
          yearOnChange(formattedValue)
          break
        case 'month':
          formattedValue = formatDate(value)
          monthOnChange(formattedValue)
          break
        case 'cvv':
          formattedValue = formatCVV(value)
          cvvOnChange(formattedValue)
          break
        default:
          formattedValue = value
      }

      if (id === 'cardNumber') setCardType(getCardType(value))
    },
    [cardNumberOnChange, monthOnChange, yearOnChange, cvvOnChange]
  )

  return (
    <div className={`flex flex-col gap-y-1 ${className}`}>
      <label className="font-system text-custom-gray/70 mb-1 text-[13px] font-medium">{title}</label>
      <div className="flex w-full flex-col">
        <div className="relative flex w-full">
          <input
            type="numeric"
            id="cardNumber"
            maxLength={getMaxLength('cardNumber')}
            onChange={handleInput}
            value={cardNumber}
            placeholder="1234 1234 1234 1234"
            className="h-9 w-full rounded-t-md px-4 py-2 text-sm shadow-[0_0_0_1px_#e0e0e0,0_2px_4px_0_rgba(0,0,0,0.07),0_1px_1.5px_0_rgba(0,0,0,0.05)] outline-none transition-colors duration-200 ease-in-out focus:z-10 focus:shadow-[0_0_0_1px_rgba(50,151,211,0.3),0_1px_1px_0_rgba(0,0,0,0.07),0_0_0_4px_rgba(50,151,211,0.3)]"
          />
          <div className="absolute right-2 top-1/2 z-20 flex -translate-y-1/2">
            {(cardType === null || cardType === 'visa') && <Visa className="h-4 w-7" />}
            {(cardType === null || cardType === 'mastercard') && <MasterCardIcon className="h-4 w-7" />}
            {(cardType === null || cardType === 'amex') && <Amex className="h-4 w-7" />}
            {(cardType === null || cardType === 'unionpay') && <UnionPay className="h-4 w-7" />}
          </div>
        </div>
        <div className="flex w-full max-w-full">
          <input
            id="month"
            maxLength={getMaxLength('month')}
            onChange={handleInput}
            value={month}
            type="text"
            placeholder="MM"
            className="max-w-1/2 h-9 w-full rounded-bl-md px-4 py-2 text-sm shadow-[0_0_0_1px_#e0e0e0,0_2px_4px_0_rgba(0,0,0,0.07),0_1px_1.5px_0_rgba(0,0,0,0.05)] outline-none transition-colors duration-200 ease-in-out focus:z-10 focus:shadow-[0_0_0_1px_rgba(50,151,211,0.3),0_1px_1px_0_rgba(0,0,0,0.07),0_0_0_4px_rgba(50,151,211,0.3)]"
          />
          <input
            id="year"
            maxLength={getMaxLength('year')}
            onChange={handleInput}
            value={year}
            placeholder="YY"
            type="text"
            className="max-w-1/2 h-9 w-full rounded-br-md px-4 py-2 text-sm shadow-[0_0_0_1px_#e0e0e0,0_2px_4px_0_rgba(0,0,0,0.07),0_1px_1.5px_0_rgba(0,0,0,0.05)] outline-none transition-colors duration-200 ease-in-out focus:z-10 focus:shadow-[0_0_0_1px_rgba(50,151,211,0.3),0_1px_1px_0_rgba(0,0,0,0.07),0_0_0_4px_rgba(50,151,211,0.3)]"
          />
        </div>
        {isCardEntered() && (
          <div className="relative mt-5 flex w-full max-w-[50%]">
            <input
              type="numeric"
              id="cvv"
              maxLength={getMaxLength('cvv')}
              onChange={handleInput}
              value={cvv}
              placeholder="CVV/CVC"
              className="h-9 w-full rounded-md px-4 py-2 text-sm shadow-[0_0_0_1px_#e0e0e0,0_2px_4px_0_rgba(0,0,0,0.07),0_1px_1.5px_0_rgba(0,0,0,0.05)] outline-none transition-colors duration-200 ease-in-out focus:z-10 focus:shadow-[0_0_0_1px_rgba(50,151,211,0.3),0_1px_1px_0_rgba(0,0,0,0.07),0_0_0_4px_rgba(50,151,211,0.3)]"
            />
            <div className="absolute right-2 top-1/2 z-20 flex -translate-y-1/2">
              <CvvCard className="text-custom-gray h-4 w-6" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
