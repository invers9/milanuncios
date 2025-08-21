import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { parseAction } from '../utils/actions'
import { Message, useChatStore } from './useChatStore'

interface SocketStore {
  ws: WebSocket | null
  isConnected: boolean
  reconnectAttempts: number
  navigate?: (path: string) => void

  setNavigate: (navigate: (path: string) => void) => void
  connect: (id: string) => void
  send: (content: string) => void
  disconnect: () => void
  reconnect: (id: string) => void
  onlineHandler: (id: string) => void
  offlineHandler: () => void
}

export const useSocketStore = create<SocketStore>()(
  immer((set, get) => ({
    ws: null,
    isConnected: false,
    reconnectAttempts: 0,

    connect: (id: string): void => {
      const { ws } = get()

      if (!id || document.hidden) return
      if (ws && ws.readyState === WebSocket.OPEN) return

      console.debug('Opening WebSocket connection for ID:', id)

      const socket = new WebSocket(`wss://${window.location.hostname}/ws/${id}`)
      //const socket = new WebSocket(`ws://localhost:8080/ws/${id}`)

      socket.onopen = async () => {
        console.debug(`[${new Date().toLocaleString()}] WebSocket connection started`)

        set({ ws: socket, isConnected: true, reconnectAttempts: 0 })
        await useChatStore.getState().fetchMessage(id)
      }

      socket.onmessage = (event) => {
        const { navigate } = get()
        const { addMessage } = useChatStore.getState()
        const newMessage = JSON.parse(event.data)

        if (newMessage && newMessage.action !== undefined) {
          parseAction(newMessage.action, newMessage['error_text'], newMessage['input'], navigate!, id)
        } else {
          addMessage(newMessage as Message)
        }
      }

      socket.onerror = (event) => {
        const { ws } = get()
        console.error(`[${new Date().toLocaleString()}] WebSocket error:`, event)

        if (ws && ws.readyState === WebSocket.OPEN) {
          ws.close()
        }
        set({ isConnected: false })
      }

      socket.onclose = (event) => {
        console.debug(`[${new Date().toLocaleString()}] WebSocket closed, code: ${event.code}, reason: ${event.reason}`)
        set({ isConnected: false })

        get().reconnect(id)
      }

      set({ ws: socket })
    },

    reconnect: (id: string) => {
      if (document.hidden || !navigator.onLine || !id) return
      const { connect, ws, reconnectAttempts } = get()
      const maxReconnectDelay = 2000
      const delay = Math.min(maxReconnectDelay, reconnectAttempts * 1000)

      console.debug(`Reconnecting in ${delay}ms... Attempt #${reconnectAttempts + 1}`)

      set({ reconnectAttempts: reconnectAttempts + 1 })

      if (ws && ws.readyState === WebSocket.CLOSING) {
        ws.onclose = () => {
          connect(id)
        }
      } else {
        setTimeout(() => {
          connect(id)
        }, delay)
      }
    },

    send: (content: string): void => {
      const { ws } = get()
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(content)
      } else {
        console.error('WebSocket is not open. Unable to send message.')
      }
    },

    disconnect: (): void => {
      const { ws } = get()

      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.close()
        set({ ws: null, isConnected: false, reconnectAttempts: 0 })
        console.debug('WebSocket connection closed manually.')
      }
    },

    onlineHandler: (id: string) => {
      const { isConnected, connect } = get()

      console.debug('Online detected.')
      if (!isConnected) {
        set({ reconnectAttempts: 0 })
        connect(id)
      }
    },

    offlineHandler: () => {
      const { ws } = get()
      console.debug('Offline detected. Disconnecting...')
      //disconnect()
      if (ws && (ws?.CLOSING || ws?.CLOSED)) {
        ws.close()
      }
    },

    setNavigate: (navigate: (path: string) => void) => {
      set((state) => {
        state.navigate = navigate
      })
    }
  }))
)
