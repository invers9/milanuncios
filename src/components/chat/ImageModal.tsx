import { createPortal } from 'react-dom'

interface ImageModalProps {
  image: string
  visible: boolean
  onClose: () => void
}

export function ImageModal({ image, visible, onClose }: ImageModalProps) {
  if (!visible) return null

  return createPortal(
    <div className="fixed inset-0 z-[1500] flex items-center justify-center bg-black bg-opacity-75" onClick={onClose}>
      <img
        src={image}
        alt="Full size"
        className="max-h-full max-w-full rounded-lg sm:max-h-[400px] sm:max-w-[400px] md:max-h-[600px] md:max-w-[600px] lg:max-h-[800px] lg:max-w-[800px]"
      />
    </div>,
    document.getElementById('modal-root')!
  )
}
