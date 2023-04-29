import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { VacanciesResponseType } from '@/api/vacancies/types'
import { vacanciesAPI } from '@/api/vacancies/vacanciesAPI'
import { QUERY_KEY } from '@/enums/queryKeys'
import { UseQueryHook } from '@/types/useQueryType'

export const useGetAllVacancies: UseQueryHook<VacanciesResponseType> = options => {
  const { query } = useRouter()

  return useQuery({
    queryKey: [QUERY_KEY.GET_ALL_VACANCIES],
    queryFn: () => vacanciesAPI.getVacancies(query),
    enabled: false,
    ...options,
  })
}
