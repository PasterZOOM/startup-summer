import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NotFound } from '@/components/pages/notFound'
import { DEFAULT_LOCALE } from '@/constatnts/constants'
import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'

const NotFoundPage: NextPageWithLayout = () => <NotFound />

NotFoundPage.getLayout = MainLayout
export default NotFoundPage

export const getStaticProps: GetStaticProps = async ({ locale = DEFAULT_LOCALE }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
