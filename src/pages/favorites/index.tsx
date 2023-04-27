import { Inter } from 'next/font/google'

import { NotFound } from '@/components/common/ui/notFound'
import { MainContainer } from '@/components/common/ui/wrappers/mainContainer'
import { VacancyHeader } from '@/components/common/vacancy/vacancyHeader'
import { VacancyInfo } from '@/components/common/vacancy/vacancyInfo'
import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'

const inter = Inter({ subsets: ['latin'] })
const data: string[] | undefined = []
const Favorites: NextPageWithLayout = () => {
  if (!data) return <NotFound />

  return (
    <div className="flex justify-center p-10">
      <MainContainer className={`${inter.className} space-y-5`}>
        <VacancyHeader />
        <VacancyInfo />
      </MainContainer>
    </div>
  )
}

Favorites.getLayout = MainLayout
export default Favorites
