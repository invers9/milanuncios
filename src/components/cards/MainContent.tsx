import { useNavigate, useParams } from 'react-router-dom'
import Product from '../../assets/icons/Product.svg?react'
import Tag from '../../assets/icons/Tag.svg?react'
import { useApplicationStore } from '../../stores/useApplicationStore'
import { Button } from '../ui/buttons/Button'

export function MainContent() {
  const navigate = useNavigate()
  const { id } = useParams()

  const { productImage, price, productName } = useApplicationStore()

  return (
    <main>
      <h1 className="my-6 text-[32px] font-bold text-black">Recibo de pago del comprador</h1>
      <div className="grid lg:grid-cols-[2fr_1fr] lg:gap-6">
        <div>
          <section className="mb-6 border-b border-[#d3d7d9] p-6 lg:rounded-lg lg:border">
            <div className="flex gap-x-2 pb-2">
              <Product className="h-6 w-6" />
              <span>Producto</span>
            </div>
            <div className="flex flex-row items-center py-2">
              <div>
                <img src={productImage} alt="" className="h-[100px] w-[100px] min-w-[100px] rounded-lg object-cover" />
              </div>
              <div className="ml-2 flex flex-col">
                <p className="">{productName}</p>
                <p className="my-2 mr-1 font-medium">{price} €</p>
              </div>
            </div>
          </section>
          <section className="mb-6 border-b border-[#d3d7d9] p-6 lg:rounded-lg lg:border">
            <div className="flex gap-x-2 pb-2">
              <Tag className="h-6 w-6" />
              <span>Información</span>
            </div>
            <p className="my-4 leading-[18.4px]">
              Después de recibir el dinero, envíe los productos al comprador de acuerdo con los datos especificados o entregue los
              productos al servicio de mensajería que lo enviará dentro de las 12 horas.
            </p>
            <p className="my-4 leading-[18.4px]">
              Después de enviar los productos, proporcione al comprador el número de seguimiento. El artículo debe enviarse dentro
              de los 3 días posteriores a la recepción del pago
            </p>
          </section>
        </div>
        <div className="max-lg:-order-2">
          <div className="shipping-summary mb-6 drop-shadow-[0_1px_3px_rgba(128,141,147,0.4)] max-lg:rounded-lg lg:rounded-t-lg">
            <div className="bg-white p-6 max-lg:rounded-lg lg:rounded-t-lg">
              <h2 className="my-4 text-xl font-medium text-[#191c1e]">
                ¡Tu artículo ha sido exhibido! El comprador ya ha pagado el pedido.
              </h2>
              <div className="mb-2 flex items-center justify-between">
                <p>Producto</p>
                <p className="font-medium">{price} €</p>
              </div>
              <p className="mb-4 text-xs leading-4 text-[#808d93]">
                Al hacer clic en el botón "OBTENER DINERO", acepta los términos del Acuerdo de usuario mediante el uso del
                servicio en línea Oferta segura
              </p>
              <Button title="Obtener Dinero" onClick={() => navigate(`/receive/${id}`)} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
