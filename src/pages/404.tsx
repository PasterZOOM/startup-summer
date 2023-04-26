import { Inter } from 'next/font/google'

import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'

const inter = Inter({ subsets: ['latin'] })

const NotFound: NextPageWithLayout = () => {
  return (
    <main className={`${inter.className} flex items-center justify-center p-24 text-9xl`}>
      404 Not found
    </main>
  )
}

NotFound.getLayout = MainLayout
export default NotFound
