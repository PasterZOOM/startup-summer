import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Vacancy } from '@/components/pages/vacancy'
import { DEFAULT_LOCALE } from '@/constatnts/constants'
import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'

const VacancyPage: NextPageWithLayout = () => <Vacancy />

VacancyPage.getLayout = MainLayout
export default VacancyPage

export const getStaticProps: GetStaticProps = async ({ locale = DEFAULT_LOCALE }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
