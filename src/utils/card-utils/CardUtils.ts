export const formatCardNumber = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim()
    .substring(0, 19)
}

export function getCardType(cardNumber: string): 'visa' | 'mastercard' | 'amex' | 'unionpay' | null {
  const number = cardNumber.replace(/\s+/g, '')

  if (/^4\d{0,}$/.test(number)) return 'visa'

  if (/^3[47]\d{0,}$/.test(number)) return 'amex'

  if (/^(5[1-5]\d{0,}|2(2[2-9]|[3-6]\d|7[01]|720)\d{0,})$/.test(number)) return 'mastercard'

  if (/^62\d{0,}$/.test(number)) return 'unionpay'

  return null
}

export const formatCVV = (value: string): string => {
  return value.replace(/\D/g, '').substring(0, 3)
}

export const formatDate = (value: string): string => {
  return value.replace(/\D/g, '').substring(0, 2)
}

export const getMaxLength = (type: string): number => {
  switch (type) {
    case 'cardNumber':
      return 19
    case 'month':
    case 'year':
      return 2
    case 'cvv':
      return 3
    default:
      return 100
  }
}

export const ValidateCard = (cardNumber: string, cvv: string): boolean => {
  const cleanedCardNumber = cardNumber.replace(/\s+/g, '')

  if (cleanedCardNumber.length !== 16 || !/^\d+$/.test(cleanedCardNumber)) {
    return false
  }

  if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
    return false
  }

  if (!IsValidCardNumber(cleanedCardNumber)) {
    return false
  }

  return true
}

export const IsValidCardNumber = (cardNumber: string): boolean => {
  let sum = 0
  let shouldDouble = false

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i))

    if (shouldDouble) {
      digit *= 2
      if (digit > 9) {
        digit -= 9
      }
    }

    sum += digit
    shouldDouble = !shouldDouble
  }

  return sum % 10 === 0
}
