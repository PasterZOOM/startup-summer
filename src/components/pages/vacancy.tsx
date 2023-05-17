import { FC } from 'react'

import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

import { CustomLoader } from '@/components/common/ui/customLoader'
import { MainContainer } from '@/components/common/ui/wrappers/mainContainer'
import { VacancyHeader } from '@/components/common/vacancy/vacancyHeader'
import { VacancyInfo } from '@/components/common/vacancy/vacancyInfo'
import { NotFound } from '@/components/pages/notFound'
import { useGetVacancy } from '@/hooks/query/useGetVacancy'

const inter = Inter({ subsets: ['latin'] })

export const Vacancy: FC = () => {
  const { query, isFallback } = useRouter()

  const { data: vacancy, isLoading, error } = useGetVacancy(query.id as string)

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
