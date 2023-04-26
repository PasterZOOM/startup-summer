import { Inter } from 'next/font/google'

import { FiltersBlock } from '@/components/common/filters/filtersBlock'
import { SearchInput } from '@/components/common/ui/inputs/searchInput'
import { VacancyCard } from '@/components/common/vacancy/vacancyCard'
import { VacancyHeader } from '@/components/common/vacancy/vacancyHeader'
import { VacancyInfo } from '@/components/common/vacancy/vacancyInfo'
import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'

const inter = Inter({ subsets: ['latin'] })

const Vacancies: NextPageWithLayout = () => {
  return (
    <main className={inter.className}>
      <FiltersBlock />
      <SearchInput />
      <VacancyCard />
      <VacancyHeader />
      <VacancyInfo />
    </main>
  )
}

Vacancies.getLayout = MainLayout
export default Vacancies
