interface InputProps {
  description: string
  placeholder: string
  className?: string
  onChange?: (value: string) => void
  value: string
}

export function BalanceInput(props: InputProps) {
  return (
    <div
      className={`flex h-[42px] w-full max-w-[264px] flex-row rounded-[10px] shadow-[0px_2px_4px_3px_rgba(0,0,0,0.6)] ${props.className}`}
    >
      <div className="relative flex h-full w-full max-w-[64px] items-center justify-center rounded-[10px]">
        <span className="font-inter text-sm font-semibold leading-[17px] text-black/80">{props.description}</span>
        <div className="absolute right-0 h-[21px] w-[1px] bg-black/40"></div>
      </div>
      <input
        type="text"
        placeholder={props.placeholder}
        className={`w-full rounded-[10px] pl-6 pr-10 text-sm font-medium leading-[17px] text-black outline-none placeholder:text-black/80`}
        onChange={(e) => props.onChange?.(e.target.value)}
        value={props.value}
      />
    </div>
  )
}
