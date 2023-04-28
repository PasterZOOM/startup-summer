import { useEffect } from 'react'

import { GetServerSideProps } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { dehydrate, QueryClient } from 'react-query'

import { catalogsApi } from '@/api/catalogs/catalogsApi'
import { vacanciesAPI } from '@/api/vacancies/vacanciesAPI'
import { FiltersBlock } from '@/components/common/filters/filtersBlock'
import { PaginationBlock } from '@/components/common/pagination/paginationBlock'
import { CustomLoader } from '@/components/common/ui/customLoader'
import { SearchInput } from '@/components/common/ui/inputs/searchInput'
import { MainContainer } from '@/components/common/ui/wrappers/mainContainer'
import { VacancyCard } from '@/components/common/vacancy/vacancyCard'
import { QUERY_KEY } from '@/enums/queryKeys'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { useLoadingParametersFromQuery } from '@/hooks/useLoadingParametersFromQuery'
import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'

const inter = Inter({ subsets: ['latin'] })

const Vacancies: NextPageWithLayout = () => {
  useLoadingParametersFromQuery()
  const { push } = useRouter()

  const { data, isFetching } = useGetAllVacancies()

  useEffect(() => {
    if (data && !data.objects.length) {
      push('404').then()
    }
  }, [data])

  if (!data) return <CustomLoader />

  return (
    <div
      className={`${inter.className} flex flex-col justify-center gap-2 p-2 md:gap-4 md:p-10 lg:flex-row lg:gap-7`}
    >
      <aside>
        <FiltersBlock />
      </aside>
      <MainContainer className="m-auto space-y-2 md:space-y-5 lg:m-0 lg:space-y-10">
        <div className="space-y-2 md:space-y-4">
          <SearchInput />
          {isFetching ? (
            <CustomLoader />
          ) : (
            data?.objects.map(vacancy => (
              <Link
                data-elem={`vacancy-${vacancy.id}`}
                key={vacancy.id}
                href={`/vacancies/${vacancy.id}`}
                className="block"
              >
                <VacancyCard vacancy={vacancy} />
              </Link>
            ))
          )}
        </div>

        <PaginationBlock />
      </MainContainer>
    </div>
  )
}

Vacancies.getLayout = MainLayout
export default Vacancies

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.GET_ALL_VACANCIES],
    queryFn: () => vacanciesAPI.getVacancies(query),
  })
  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.GET_CATALOGS],
    queryFn: catalogsApi.getCatalogs,
  })

  return { props: { dehydratedState: dehydrate(queryClient) } }
}
