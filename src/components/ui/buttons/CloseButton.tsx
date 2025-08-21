import Close from '../../../assets/icons/Close.svg?react'

interface CloseButtonProps {
  onClick: () => void
  className: string
}

export function CloseButton(props: CloseButtonProps) {
  return (
    <button className={props.className} onClick={props.onClick}>
      <Close />
    </button>
  )
}
