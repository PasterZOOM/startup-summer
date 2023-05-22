import { useQuery, UseQueryResult } from 'react-query'

import { authAPI } from '@/api/auth/authAPI'
import { AuthResponseType } from '@/api/auth/types'
import { QUERY_KEY } from '@/enums/queryKeys'
import { selectRefreshToken, selectSetTokensData, useUserSettings } from '@/stores/useAuthStore'

export const useRefreshToken = (): UseQueryResult<AuthResponseType> => {
  const refreshToken = useUserSettings(selectRefreshToken)
  const setTokensData = useUserSettings(selectSetTokensData)

  return useQuery({
    queryKey: [QUERY_KEY.REFRESH_TOKEN],
    queryFn: () => authAPI.refreshToken(refreshToken),
    enabled: false,
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
    onSuccess: data => {
      setTokensData(data)
    },
  })
}
