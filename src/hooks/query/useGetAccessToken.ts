import { useQuery } from 'react-query'

import { authAPI } from '@/api/auth/authAPI'
import { AuthByPasswordResponseType } from '@/api/auth/types'
import { QUERY_KEY } from '@/enums/queryKeys'
import { selectSetAccessToken, useUserSettings } from '@/store/useAuthStore'
import { UseQueryHook } from '@/types/useQueryType'

export const useGetAccessToken: UseQueryHook<AuthByPasswordResponseType> = options => {
  const setAccessToken = useUserSettings(selectSetAccessToken)

  return useQuery({
    queryKey: [QUERY_KEY.GET_ACCESS_TOKEN],
    queryFn: authAPI.byPassword,
    retry: false,
    staleTime: Infinity,
    refetchOnMount: false,
    onSuccess: res => {
      setAccessToken(res)
    },
    ...options,
  })
}
