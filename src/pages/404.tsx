import { useEffect } from 'react'

import { GetStaticProps } from 'next'
import { Inter } from 'next/font/google'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NotFound } from '@/components/common/ui/notFound'
import { DEFAULT_LOCALE } from '@/constatnts/constants'
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

export const getStaticProps: GetStaticProps = async ({ locale = DEFAULT_LOCALE }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
