import { Inter } from 'next/font/google'

import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'

const inter = Inter({ subsets: ['latin'] })

const Favorites: NextPageWithLayout = () => {
  return <main className={inter.className}>Favorites</main>
}

Favorites.getLayout = MainLayout
export default Favorites
