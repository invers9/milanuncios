import { useEffect, useState } from 'react'
import './Timer.scss'

export function Timer() {
  const [countdown, setCountdown] = useState(60 * 7) // Установите таймер на 30 секунд
  const [animationDuration] = useState(`${60 * 7}s`) // Продолжительность анимации устанавливается один раз

  const decreaseCountdown = () => {
    setCountdown((prevCountdown) => (prevCountdown <= 0 ? 0 : prevCountdown - 1))
  }

  useEffect(() => {
    const interval = setInterval(decreaseCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  const formattedTime = () => {
    const minutes = Math.floor(countdown / 60)
    const seconds = countdown % 60
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <div
      id="countdown"
      style={{
        position: 'relative',
        height: '60px',
        width: '60px',
        textAlign: 'center'
      }}
    >
      <div className="flex h-full w-full items-center justify-center text-sm leading-[19px] text-black">{formattedTime()}</div>
      <svg
        className="timer-icon h-[60px] w-[60px]"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          transform: 'rotateY(-180deg) rotateZ(-90deg)'
        }}
      >
        <circle
          className="static-circle"
          r="28"
          cx="30"
          cy="30"
          style={{ stroke: '#ccc', strokeWidth: '3px', fill: 'none' }}
        ></circle>
        <circle
          className="animated-circle"
          r="28"
          cx="30"
          cy="30"
          style={{
            strokeDasharray: '188px',
            strokeDashoffset: '0px',
            strokeLinecap: 'round',
            strokeWidth: '3px',
            stroke: '#3DD2BA',
            fill: 'none',
            animation: `countdown ${animationDuration} linear forwards`
          }}
        ></circle>
      </svg>
    </div>
  )
}
