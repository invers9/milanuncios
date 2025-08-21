interface DividerProps {
  className?: string
}

export function Divider({ className }: DividerProps) {
  return <div className={`h-[1px] w-full bg-black/20 ${className}`}></div>
}
