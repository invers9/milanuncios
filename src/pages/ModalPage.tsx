import { SecondaryLayout } from '../layouts/SecondaryLayout'

interface ModalPageProps {
  ModalComponent: React.ComponentType
}

export function ModalPage({ ModalComponent }: ModalPageProps) {
  return <SecondaryLayout children={<ModalComponent />} />
}
