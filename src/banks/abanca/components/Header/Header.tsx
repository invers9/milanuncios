import '../../styles/styles.scss'

export function Header() {
  return (
    <header className="flex h-[35px] w-full items-center justify-center bg-[#5b87da]">
      <div className="w-full max-w-[1004px]">
        <a
          className="font-arial text-[15px] text-white hover:underline max-md:hidden"
          href="https://www.abanca.com/es/ayuda/banca-electronica/contrasenas-y-acceso-a-banca-electronica/"
        >
          Ayuda
        </a>
      </div>
    </header>
  )
}
