import { ParsedUrlQuery } from 'querystring'

import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { AuthErrorType } from '@/api/auth/types'
import { VacanciesResponseType } from '@/api/vacancies/types'
import { vacanciesAPI } from '@/api/vacancies/vacanciesAPI'
import { QUERY_KEY } from '@/enums/queryKeys'
import { useAuthError } from '@/hooks/query/useAuthError'
import { UseQueryHook } from '@/types/useQueryType'

export const useGetAllVacancies: UseQueryHook<
  VacanciesResponseType,
  AuthErrorType,
  [QUERY_KEY.GET_ALL_VACANCIES, ParsedUrlQuery]
> = options => {
  const { query } = useRouter()
  const handleAuthError = useAuthError()

  return useQuery({
    queryKey: [QUERY_KEY.GET_ALL_VACANCIES, query],
    queryFn: () => vacanciesAPI.getVacancies(query),
    enabled: false,
    onError: data => {
      handleAuthError(data)
    },
    ...options,
  })
}
