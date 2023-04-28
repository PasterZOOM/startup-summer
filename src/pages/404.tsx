import { useEffect } from 'react'

import { Inter } from 'next/font/google'

import { NotFound } from '@/components/common/ui/notFound'
import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'
import { selectClearParams, useParamsStore } from '@/store/useParamsStore'

const inter = Inter({ subsets: ['latin'] })

const Error: NextPageWithLayout = () => {
  const clearParams = useParamsStore(selectClearParams)

  useEffect(() => {
    clearParams()
  }, [])

  return (
    <main className={`${inter.className} `}>
      <NotFound />
    </main>
  )
}

Error.getLayout = MainLayout
export default Error
