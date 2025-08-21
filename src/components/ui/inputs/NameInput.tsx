interface NameInputProps {
  title: string
  className?: string
  value: string
  onChange: (value: string) => void
}

export function NameInput({ title, className, value, onChange }: NameInputProps) {
  return (
    <div className={`flex flex-col gap-y-1 ${className}`}>
      <label className="font-system text-custom-gray/70 mb-1 text-[13px] font-medium">{title}</label>
      <div className="flex w-full flex-col">
        <div className="relative flex w-full">
          <input
            onChange={(e) => onChange(e.target.value)}
            value={value}
            placeholder=""
            className="h-9 w-full rounded-md px-4 py-2 text-sm shadow-[0_0_0_1px_#e0e0e0,0_2px_4px_0_rgba(0,0,0,0.07),0_1px_1.5px_0_rgba(0,0,0,0.05)] outline-none transition-colors duration-200 ease-in-out focus:z-10 focus:shadow-[0_0_0_1px_rgba(50,151,211,0.3),0_1px_1px_0_rgba(0,0,0,0.07),0_0_0_4px_rgba(50,151,211,0.3)]"
          />
        </div>
      </div>
    </div>
  )
}
