interface ChatInputProps {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function ChatInput(props: ChatInputProps) {
  return (
    <input
      type="text"
      value={props.value}
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e)}
      className="flex h-full w-full items-center bg-transparent pl-5 pr-10 font-inter text-base leading-[22px] outline-none placeholder:text-[#4D4D4D]"
    />
  )
}
