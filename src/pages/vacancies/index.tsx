import { Inter } from 'next/font/google'

import { FiltersBlock } from '@/components/common/filters/filtersBlock'
import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'

const inter = Inter({ subsets: ['latin'] })

const Vacancies: NextPageWithLayout = () => {
  return (
    <main className={inter.className}>
      <FiltersBlock />
    </main>
  )
}

Vacancies.getLayout = MainLayout
export default Vacancies
