import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import api from '../api/api'
import { isImageBase64 } from '../utils/utils'
import { useSocketStore } from './useSocketStore'

export interface Message {
  id: number
  sender: number
  content: string
  read: boolean
  isImage: boolean
}

interface ChatStore {
  message: string
  messages: Message[]
  chatOpened: boolean

  addMessage: (msg: Message) => void
  setMessage: (msg: string) => void
  fetchMessage: (id: string) => Promise<void>
  getUnreadMessagesCount: () => number
  sendMessage: (id: string) => Promise<void>
  markMessageAsRead: (messageId: number, id: string) => Promise<void>
  toggleChat: (id: string) => Promise<void>
  openChat: () => void
}

export const useChatStore = create<ChatStore>()(
  immer((set, get) => ({
    message: '',
    messages: [],
    chatOpened: false,
    addMessage: (msg: Message) => {
      const { messages } = get()

      if (!Array.isArray(messages)) {
        set({ messages: [] })
      }

      set((state) => {
        state.messages.push(msg)
      })
    },
    setMessage: (msg: string) => {
      set({ message: msg })
    },
    getUnreadMessagesCount: (): number => {
      const { messages } = get()
      if (!messages) return 0
      return messages.filter((message) => !message.read).length
    },
    fetchMessage: async (id: string) => {
      try {
        const response = await api.get(`/messages/${id}`)
        const data: Message[] = response.data.messages

        set((state) => {
          state.messages = data
        })
      } catch (e) {
        console.error(e)
      }
    },
    sendMessage: async (id: string) => {
      const { message, messages } = get()
      const { ws, send } = useSocketStore.getState()

      if (message.length > 0 && ws && ws.readyState === WebSocket.OPEN) {
        const msg = {
          sender: 1,
          content: message,
          advertisement_id: id,
          read: true
        }
        send(JSON.stringify(msg))

        let lastId = 0
        if (messages) {
          lastId = messages[messages.length - 1].id
        } else {
          set({ messages: [] })
        }

        const msgToSave: Message = {
          id: (lastId += 1),
          sender: 1,
          content: message,
          read: true,
          isImage: isImageBase64(message)
        }

        set({ message: '' })
        set((state) => {
          state.messages.push(msgToSave)
        })
      }
    },
    markMessageAsRead: async (messageId: number, id: string) => {
      const { messages } = get()
      const messageIndex = messages.findIndex((m) => m.id === messageId)

      if (messageIndex !== -1) {
        set((state) => {
          state.messages[messageIndex].read = true
        })

        await api.post(`/message-read/${id}?message_id=${messageId}`)
      }
    },
    toggleChat: async (id: string) => {
      set((state) => {
        state.chatOpened = !state.chatOpened
      })

      const { chatOpened } = get()

      if (!chatOpened) {
        await api.post(`/close-tp/${id}`)
      }
    },
    openChat: () => {
      set({ chatOpened: true })
    }
  }))
)
