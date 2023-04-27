import { Pagination } from '@mantine/core'
import { GetServerSideProps } from 'next'
import { Inter } from 'next/font/google'

import { VacanciesResponseType } from '@/api/vacancies/types'
import { vacanciesAPI } from '@/api/vacancies/vacanciesAPI'
import { FiltersBlock } from '@/components/common/filters/filtersBlock'
import { SearchInput } from '@/components/common/ui/inputs/searchInput'
import { NotFound } from '@/components/common/ui/notFound'
import { MainContainer } from '@/components/common/ui/wrappers/mainContainer'
import { VacancyCard } from '@/components/common/vacancy/vacancyCard'
import { useGetAccessToken } from '@/hooks/query/useGetAccessToken'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { useChangeParams } from '@/hooks/useChangeParams'
import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'

const inter = Inter({ subsets: ['latin'] })

type PropsType = { vacancies: VacanciesResponseType }

const Vacancies: NextPageWithLayout<PropsType> = ({ vacancies }: PropsType) => {
  useChangeParams()
  useGetAccessToken()

  const { data } = useGetAllVacancies({ initialData: vacancies, enabled: false })

  if (!data?.objects.length) return <NotFound />

  return (
    <div className={`${inter.className} flex justify-center gap-7 p-10`}>
      <aside>
        <FiltersBlock />
      </aside>
      <MainContainer className="space-y-10">
        <div className="space-y-4">
          <SearchInput />
          {data?.objects.map(vacancy => (
            <VacancyCard key={vacancy.id} vacancy={vacancy} />
          ))}
        </div>
        <div className="flex justify-center">
          <Pagination total={3} />
        </div>
      </MainContainer>
    </div>
  )
}

Vacancies.getLayout = MainLayout
export default Vacancies

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const vacancies = await vacanciesAPI.getVacancies(query)

  return { props: { vacancies } }
}
