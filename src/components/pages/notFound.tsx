import { FC } from 'react'

import { Inter } from 'next/font/google'

import { NotFoundButton } from '@/components/common/ui/buttons/notFoundButton'
import { Empty } from '@/components/common/ui/empty'

const inter = Inter({ subsets: ['latin'] })

export const NotFound: FC = () => {
  return (
    <main className={`flex flex-col items-center gap-8 ${inter.className}`}>
      <Empty />
      <NotFoundButton />
    </main>
  )
}
