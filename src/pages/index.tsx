import { Inter } from 'next/font/google'

import { NextPageWithLayout } from '@/pages/_app'
import { MainLayout } from '@/pages/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  return <main className={inter.className}>Hello world</main>
}

Home.getLayout = MainLayout
export default Home
