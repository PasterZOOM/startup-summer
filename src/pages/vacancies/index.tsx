import { Pagination } from '@mantine/core'
import { Inter } from 'next/font/google'

import { FiltersBlock } from '@/components/common/filters/filtersBlock'
import { SearchInput } from '@/components/common/ui/inputs/searchInput'
import { NotFound } from '@/components/common/ui/notFound'
import { MainContainer } from '@/components/common/ui/wrappers/mainContainer'
import { VacancyCard } from '@/components/common/vacancy/vacancyCard'
import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'

const inter = Inter({ subsets: ['latin'] })
const data: string[] | undefined = []
const Vacancies: NextPageWithLayout = () => {
  if (!data) return <NotFound />

  return (
    <div className={`${inter.className} flex justify-center gap-7 p-10`}>
      <aside>
        <FiltersBlock />
      </aside>
      <MainContainer className="space-y-10">
        <div className="space-y-4">
          <SearchInput />
          <VacancyCard />
          <VacancyCard />
          <VacancyCard />
          <VacancyCard />
        </div>
        <div className="flex justify-center">
          <Pagination total={3} />
        </div>
      </MainContainer>
    </div>
  )
}

Vacancies.getLayout = MainLayout
export default Vacancies
