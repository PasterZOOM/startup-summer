import { Inter } from 'next/font/google'

import { MainLayout } from '@/layouts/MainLayout'
import { NextPageWithLayout } from '@/pages/_app'

const inter = Inter({ subsets: ['latin'] })

const Vacancies: NextPageWithLayout = () => {
  return <main className={inter.className}>Vacancies</main>
}

Vacancies.getLayout = MainLayout
export default Vacancies
