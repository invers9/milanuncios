import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MainContent } from '../components/cards/MainContent.tsx'
import { Header } from '../components/header/Header.tsx'
import { userEntered } from '../utils/utils.ts'

export function ProductPage() {
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      userEntered(id, 1)
    }
  }, [id])

  return (
    <div className="relative max-lg:px-4 lg:mx-auto lg:max-w-[980px]">
      <Header />
      <MainContent />
    </div>
  )
}
