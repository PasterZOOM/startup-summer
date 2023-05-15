import { useQuery, UseQueryResult } from 'react-query'

import { AuthErrorType } from '@/api/auth/types'
import { VacancyType } from '@/api/vacancies/types'
import { vacanciesAPI } from '@/api/vacancies/vacanciesAPI'
import { QUERY_KEY } from '@/enums/queryKeys'
import { useAuthError } from '@/hooks/useAuthError'

export const useGetVacancy = (id: string): UseQueryResult<VacancyType, AuthErrorType> => {
  const handleAuthError = useAuthError()

  return useQuery({
    queryKey: [QUERY_KEY.GET_VACANCY, id],
    queryFn: () => vacanciesAPI.getVacancy(id),
    enabled: false,
    onError: data => {
      handleAuthError(data)
    },
  })
}
