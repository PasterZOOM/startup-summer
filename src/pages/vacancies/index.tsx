import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { dehydrate, QueryClient } from 'react-query'

import { catalogsApi } from '@/api/catalogs/catalogsApi'
import { Vacancies } from '@/components/pages/vacancies'
import { DEFAULT_LOCALE } from '@/constatnts/constants'
import { QUERY_KEY } from '@/enums/queryKeys'
import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'

const VacanciesPage: NextPageWithLayout = () => <Vacancies />

VacanciesPage.getLayout = MainLayout
export default VacanciesPage

export const getServerSideProps: GetServerSideProps = async ({ locale = DEFAULT_LOCALE }) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.GET_CATALOGS],
    queryFn: catalogsApi.getCatalogs,
  })

  return {
    props: {
      ...(await serverSideTranslations(locale, ['filters', 'common'])),
      dehydratedState: dehydrate(queryClient),
    },
  }
}
