import { useQuery, UseQueryResult } from 'react-query'

import { VacancyType } from '@/api/vacancies/types'
import { vacanciesAPI } from '@/api/vacancies/vacanciesAPI'
import { QUERY_KEY } from '@/enums/queryKeys'

export const useGetVacancy = (id: string): UseQueryResult<VacancyType> => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_VACANCY, id],
    queryFn: () => vacanciesAPI.getVacancy(id),
    enabled: false,
  })
}
