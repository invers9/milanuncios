import Logotype from '../../assets/Logotype.svg?react'

export function OnConnectLoader() {
  return (
    <>
      <div className="mt-32 flex h-full justify-center">
        <div className="flex flex-col items-center">
          <Logotype className="mb-4 block h-full max-h-10" />
          <p className="mb-6 max-w-[260px] text-center text-lg font-medium leading-[25px]">
            Estimado cliente, es una página segura, espere hasta que se establezca la conexión.
          </p>
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-gray-300 border-t-accent" />
        </div>
      </div>
    </>
  )
}
