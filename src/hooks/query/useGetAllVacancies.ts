import { useQuery } from 'react-query'

import { ParamsKey, VacanciesResponseType } from '@/api/vacancies/types'
import { vacanciesAPI } from '@/api/vacancies/vacanciesAPI'
import { QUERY_KEY } from '@/enums/queryKeys'
import { selectParamsState, useParamsStore } from '@/store/useParamsStore'
import { UseQueryHook } from '@/types/useQueryType'

export const useGetAllVacancies: UseQueryHook<
  VacanciesResponseType,
  unknown,
  (Partial<Record<ParamsKey, string>> | QUERY_KEY)[]
> = options => {
  const [params] = useParamsStore(selectParamsState)

  return useQuery({
    queryKey: [QUERY_KEY.GET_ALL_VACANCIES, params],
    queryFn: () => vacanciesAPI.getVacancies({ ...params }),
    ...options,
  })
}
