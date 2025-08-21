import { ReactNode, useEffect, useRef, useState } from 'react'
import { MessageSender } from '../../constants/enums'
import { ImageModal } from './ImageModal'

interface IProps {
  messageId: number
  messageSender: MessageSender
  msg: ReactNode // ReactNode, а не string
  read: boolean
  isImage: boolean
  markAsRead?: (id: number) => void
}

const Message = (props: IProps) => {
  const messageRef = useRef<HTMLDivElement | null>(null)
  const [isModalVisible, setModalVisible] = useState(false)

  const openModal = () => setModalVisible(true)
  const closeModal = () => setModalVisible(false)

  const createObserver = () => {
    const options = { root: null, rootMargin: '0px', threshold: 1.0 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          props.markAsRead?.(props.messageId)
          observer.unobserve(messageRef.current!)
        }
      })
    }, options)

    if (messageRef.current) {
      observer.observe(messageRef.current)
    }
  }

  useEffect(() => {
    if (!props.read) {
      createObserver()
    }
  }, [props.read])

  return (
    <>
      {props.messageSender === MessageSender.Support ? (
        <div ref={messageRef} id={`message-${props.messageId}`} className="flex gap-x-2.5 font-system font-normal">
          {!props.isImage ? (
            <span className="max-w-[75%] whitespace-pre-wrap break-words rounded-xl rounded-bl-none bg-gray-100 p-3 text-[14px]">
              {props.msg}
            </span>
          ) : (
            <img
              className="max-h-[200px] max-w-[200px] cursor-pointer rounded-lg"
              src={props.msg as string} // Тут явно указываем, что msg - string для img
              alt=""
              onClick={openModal}
            />
          )}
        </div>
      ) : (
        <div id={`message-${props.messageId}`} ref={messageRef} className="flex w-full justify-end font-sans font-normal">
          {!props.isImage ? (
            <span className="max-w-[75%] whitespace-pre-wrap break-words rounded-xl rounded-br-none bg-blue-500 p-3 font-system text-[14px] text-white">
              {props.msg}
            </span>
          ) : (
            <img
              className="max-h-[200px] max-w-[200px] cursor-pointer rounded-lg"
              src={props.msg as string}
              alt=""
              onClick={openModal}
            />
          )}
        </div>
      )}
      {isModalVisible && <ImageModal image={props.msg as string} visible={isModalVisible} onClose={closeModal} />}
    </>
  )
}

export default Message
