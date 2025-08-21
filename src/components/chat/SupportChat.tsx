import { useEffect, useMemo, useRef } from 'react'
import { useParams } from 'react-router-dom'
import ScrollableFeed from 'react-scrollable-feed'
import Paperclip from '../../assets/icons/Paperclip.svg?react'
import { useChatStore } from '../../stores/useChatStore'
import ChatMessage from './ChatMessage'

// 👇 Прямо здесь, как просил
function linkifyText(text: string): React.ReactNode {
  const urlRegex = /((https?:\/\/)?([\w.-]+\.[a-zA-Z]{2,})(\/\S*)?)/g
  const parts: React.ReactNode[] = []
  let lastIndex = 0

  for (const match of text.matchAll(urlRegex)) {
    const [url] = match
    const index = match.index!

    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index))
    }

    const href = url.startsWith('http') ? url : `https://${url}`
    parts.push(
      <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
        {url}
      </a>
    )

    lastIndex = index + url.length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return <>{parts}</>
}

export function SupportChat() {
  const { id } = useParams()
  const fileInput = useRef<HTMLInputElement | null>(null)

  const { chatOpened, messages, message, setMessage, sendMessage, markMessageAsRead, toggleChat, getUnreadMessagesCount } = useChatStore()

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Найдём все изображения внутри контейнера сообщений
    const container = messagesEndRef.current?.parentElement
    if (!container) return

    const images = container.querySelectorAll('img')
    let loadedCount = 0

    if (images.length === 0) {
      // Если нет изображений — сразу скроллим
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    const onLoad = () => {
      loadedCount++
      if (loadedCount === images.length) {
        // Когда все изображения загружены — скроллим вниз
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++
      } else {
        img.addEventListener('load', onLoad)
        img.addEventListener('error', onLoad)
      }
    })

   
    if (loadedCount === images.length) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', onLoad)
        img.removeEventListener('error', onLoad)
      })
    }
  }, [messages])

  useEffect(() => {
    const timeout = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)

    return () => clearTimeout(timeout)
  }, [messages])

  const processedMessages = useMemo(() => {
    if (!messages) return []
    return messages.map((msg) => ({
      ...msg,
      jsxContent: msg.isImage ? msg.content : linkifyText(msg.content)
    }))
  }, [messages])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleSend = () => {
    if (!message.trim()) return
    sendMessage(id!)
    setMessage('')
  }

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file')
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      if (reader.result) {
        setMessage(reader.result.toString())
        sendMessage(id!)
        setMessage('')
      }
    }
    reader.readAsDataURL(file)
  }

  const unreadMessages = getUnreadMessagesCount()

  return (
    <>
      <div
        onClick={() => toggleChat(id!)}
        className="z-200 group fixed bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition-transform hover:scale-110 hover:bg-blue-700"
      >
        <svg className="h-8 w-8 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
        {unreadMessages > 0 && (
          <span className="absolute right-0 top-0 flex h-5 w-5 -translate-y-1 translate-x-1 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {unreadMessages}
          </span>
        )}
      </div>

      {chatOpened && (
        <div className="fixed bottom-28 right-6 z-[1000] flex h-[80%] w-[min(400px,calc(100vw-40px))] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-4 ring-blue-500/10">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white ring-2 ring-white/30">
                  S
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Support</h2>
                <p className="text-xs text-blue-100 opacity-80">Online • Typically replies in mins</p>
              </div>
            </div>
            <button onClick={() => toggleChat(id!)} className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <svg className="h-5 w-5 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <ScrollableFeed className="scrollbar-thin scrollbar-thumb-blue-300 space-y-4 overflow-y-auto p-6">
            {(processedMessages === null || processedMessages.length > 0) &&
              processedMessages.map((message) => (
                <ChatMessage
                  key={message.id}
                  messageId={message.id}
                  msg={message.jsxContent}
                  read={message.read}
                  isImage={message.isImage}
                  messageSender={message.sender}
                  markAsRead={() => markMessageAsRead(message.id, id!)}
                />
              ))}

            <div ref={messagesEndRef} />
          </ScrollableFeed>

          {/* Input */}
          <div className="min-h-[82px] border-t border-gray-200 bg-white p-4">
            <div className="flex items-center space-x-2">
              <input ref={fileInput} type="file" className="hidden" onChange={onFileChange} />
              <Paperclip className="cursor-pointer" onClick={() => fileInput.current?.click()} />
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={handleInputChange}
                className="flex-grow rounded-full bg-[#F3F4F6] p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button onClick={handleSend} className="rounded-full bg-blue-600 p-3 text-white hover:bg-blue-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
