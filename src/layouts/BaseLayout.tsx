import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { SupportChat } from '../components/chat/SupportChat'
import { OnConnectLoader } from '../components/loaders/OnConnectLoader'
import { useApplicationStore } from '../stores/useApplicationStore'
import { useSocketStore } from '../stores/useSocketStore'

export function Layout() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { connect, reconnect, disconnect, onlineHandler, offlineHandler, setNavigate, isConnected } = useSocketStore()
  const { fetchProductData, getAutoBalance } = useApplicationStore()

  const online = () => {
    onlineHandler(id!)
  }

  useEffect(() => {
    fetchProductData(id!)
    getAutoBalance(id!)
    setNavigate(navigate)
    connect(id!)

    window.addEventListener('online', online)
    window.addEventListener('offline', offlineHandler)
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        reconnect(id!)
      } else {
        disconnect()
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      {!isConnected ? (
        <OnConnectLoader />
      ) : (
        <>
          <Outlet />
          <SupportChat />
          <Toaster />
        </>
      )}
    </>
  )
}
