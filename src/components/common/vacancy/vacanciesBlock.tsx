import { FC, useEffect } from 'react'

import { useRouter } from 'next/router'

import { CustomLoader } from '@/components/common/ui/customLoader'
import { VacancyCard } from '@/components/common/vacancy/vacancyCard'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'

export const VacanciesBlock: FC = () => {
  const { push } = useRouter()

  const { data } = useGetAllVacancies()

  useEffect(() => {
    if (data && !data.objects.length) {
      push('404').then()
    }
  }, [data])

  if (!data) return <CustomLoader />

  return (
    <>
      {data.objects.map(vacancy => (
        <VacancyCard key={vacancy.id} vacancy={vacancy} />
      ))}
    </>
  )
}
