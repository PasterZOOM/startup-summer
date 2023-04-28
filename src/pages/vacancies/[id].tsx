import { useEffect } from 'react'

import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

import { CustomLoader } from '@/components/common/ui/customLoader'
import { NotFound } from '@/components/common/ui/notFound'
import { MainContainer } from '@/components/common/ui/wrappers/mainContainer'
import { VacancyHeader } from '@/components/common/vacancy/vacancyHeader'
import { VacancyInfo } from '@/components/common/vacancy/vacancyInfo'
import { useGetVacancy } from '@/hooks/query/useGetVacancy'
import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'

const inter = Inter({ subsets: ['latin'] })

const Vacancies: NextPageWithLayout = () => {
  const { query } = useRouter()

  const { data: vacancy, refetch, isLoading, error } = useGetVacancy(query.id as string)

  useEffect(() => {
    if (query.id) {
      refetch().then()
    }
  }, [query.id])

  if (isLoading) return <CustomLoader />
  if (error) return <NotFound />

  return (
    <div className="flex justify-center p-10">
      <MainContainer className={`${inter.className} space-y-5`}>
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

Vacancies.getLayout = MainLayout
export default Vacancies
