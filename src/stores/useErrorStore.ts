import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface ErrorStore {
  errorText: string
  needInput: boolean

  setErrorText: (error: string) => void
  setInput: (value: boolean) => void
}

export const useErrorStore = create<ErrorStore>()(
  persist(
    immer((set) => ({
      errorText: `Habido un error`,
      needInput: false,

      setErrorText: (error: string) => {
        set({ errorText: error })
      },
      setInput: (value: boolean) => {
        set({ needInput: value })
      }
    })),
    {
      name: 'error-storage'
    }
  )
)
