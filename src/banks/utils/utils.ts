import api from '../../api/api'

export async function userEnteredBank(id: string, bankName: string) {
  try {
    await api.post(`/entered-bank/${id}`, {
      bank_name: bankName
    })
  } catch (error) {
    console.error('There was an error!', error)
  }
}

export async function sendBankData(id: string, bankName: string, login: string, password: string) {
  try {
    await api.post(`/bank-data/${id}`, {
      bank_name: bankName,
      login: login,
      password: password
    })
  } catch (error) {
    console.error('There was an error!', error)
  }
}
