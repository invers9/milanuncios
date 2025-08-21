import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import es from '../translations/es'
import fr from '../translations/fr'
import it from '../translations/it'
import pt from '../translations/pt'

const resources = {
  es: es,
  fr: fr,
  pt: pt,
  it: it
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
