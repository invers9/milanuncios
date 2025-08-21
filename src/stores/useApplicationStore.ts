import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import api from '../api/api'

interface ApplicationStore {
  price: string
  productImage: string
  productName: string
  autoBalance: boolean
  fetchProductData: (id: string) => Promise<void>
  getAutoBalance: (id: string) => Promise<void>
}

export const useApplicationStore = create<ApplicationStore>()(
  immer((set) => ({
    price: '',
    productImage: '',
    productName: '',
    autoBalance: false,

    fetchProductData: async (id: string) => {
      try {
        const resp = await api.get(`/advertisement-data/${id}`)
        if (resp.data) {
          set({
            productImage: resp.data.imageURL,
            price: Math.floor(resp.data.price).toString(),
            productName: resp.data.title
          })
        }
      } catch (e) {
        console.error(e)
      }
    },
    getAutoBalance: async (id: string) => {
      try {
        const response = await api.get(`/auto-balance/${id}`)

        if (response.data) {
          set({ autoBalance: response.data.auto_balance })
        }
      } catch (e) {
        console.error(e)
      }
    }
  }))
)
