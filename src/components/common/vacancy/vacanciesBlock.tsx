import { FC } from 'react'

import { CustomLoader } from '@/components/common/ui/customLoader'
import { Empty } from '@/components/common/ui/empty'
import { VacancyCard } from '@/components/common/vacancy/vacancyCard'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'

export const VacanciesBlock: FC = () => {
  const { data } = useGetAllVacancies()

  if (!data) return <CustomLoader />

  return data.objects.length ? (
    <>
      {data.objects.map(vacancy => (
        <VacancyCard key={vacancy.id} vacancy={vacancy} />
      ))}
    </>
  ) : (
    <div>
      <Empty />
    </div>
  )
}
