import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Favorites } from '@/components/pages/favorites'
import { DEFAULT_LOCALE } from '@/constatnts/constants'
import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'

const FavoritesPage: NextPageWithLayout = () => <Favorites />

FavoritesPage.getLayout = MainLayout
export default FavoritesPage

export const getStaticProps: GetStaticProps = async ({ locale = DEFAULT_LOCALE }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
