import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { dehydrate, QueryClient } from 'react-query'

import { vacanciesAPI } from '@/api/vacancies/vacanciesAPI'
import { Vacancy } from '@/components/pages/vacancy'
import { DEFAULT_LOCALE } from '@/constatnts/constants'
import { QUERY_KEY } from '@/enums/queryKeys'
import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'

const VacancyPage: NextPageWithLayout = () => <Vacancy />

VacancyPage.getLayout = MainLayout
export default VacancyPage

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await vacanciesAPI.getVacancies()

  const paths = res.objects.map(vacancy => ({ params: { id: vacancy.id.toString() } }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params = {}, locale = DEFAULT_LOCALE }) => {
  const { id } = params
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.GET_VACANCY, id],
    queryFn: () => vacanciesAPI.getVacancy(id as string),
  })

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      dehydratedState: dehydrate(queryClient),
    },
  }
}
