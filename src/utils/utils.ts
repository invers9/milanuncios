import axios from 'axios'
import api from '../api/api'

export default function getOS() {
  const userAgent = window.navigator.userAgent

  if (/Android/.test(userAgent)) return 'Android'
  if (/iPhone|iPad|iPod/.test(userAgent)) return 'IOS'
  if (/Windows NT/.test(userAgent)) return 'Windows'
  if (/Mac OS X/.test(userAgent)) return 'MacOS'
  if (/Linux/.test(userAgent)) return 'Linux'

  return 'Unknown'
}

export async function userEntered(id: string, page_id: number) {
  try {
    const url = new URL(window.location.href)
    const utmSource = url.searchParams.get('utm_source')

    const ipResponse = await axios.get('https://api.ipify.org?format=json')
    const userIP = ipResponse.data.ip

    await api.post(`/entered-page/${id}`, {
      utm_source: utmSource === null ? '' : utmSource,
      page_id: page_id,
      ip_address: userIP,
      os: getOS()
    })
  } catch (error) {
    console.error('There was an error!', error)
  }
}

export const isImageBase64 = (str: string): boolean => {
  const base64Pattern = /^data:image\/[a-zA-Z]+;base64,/
  return base64Pattern.test(str)
}
