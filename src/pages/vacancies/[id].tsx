import { useEffect } from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { dehydrate, QueryClient } from 'react-query'

import { vacanciesAPI } from '@/api/vacancies/vacanciesAPI'
import { CustomLoader } from '@/components/common/ui/customLoader'
import { NotFound } from '@/components/common/ui/notFound'
import { MainContainer } from '@/components/common/ui/wrappers/mainContainer'
import { VacancyHeader } from '@/components/common/vacancy/vacancyHeader'
import { VacancyInfo } from '@/components/common/vacancy/vacancyInfo'
import { DEFAULT_LOCALE } from '@/constatnts/constants'
import { QUERY_KEY } from '@/enums/queryKeys'
import { useGetVacancy } from '@/hooks/query/useGetVacancy'
import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'

const inter = Inter({ subsets: ['latin'] })

const Vacancy: NextPageWithLayout = () => {
  const { query, isFallback } = useRouter()

  const { data: vacancy, refetch, isLoading, error } = useGetVacancy(query.id as string)

  useEffect(() => {
    if (query.id) {
      refetch().then()
    }
  }, [query.id])

  if (isLoading || isFallback) return <CustomLoader />
  if (error) return <NotFound />

  return (
    <div className="flex justify-center p-2 md:p-10">
      <MainContainer className={`${inter.className} space-y-2 md:space-y-5`}>
        {vacancy && (
          <>
            <VacancyHeader vacancy={vacancy} />
            <VacancyInfo vacancy={vacancy} />
          </>
        )}
      </MainContainer>
    </div>
  )
}

Vacancy.getLayout = MainLayout
export default Vacancy

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
      dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
