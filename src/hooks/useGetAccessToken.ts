import { useEffect } from 'react'

import { authAPI } from '@/api/auth/authAPI'
import {
  selectAccessToken,
  selectRefreshToken,
  selectSetTokensData,
  selectTtl,
  useUserSettings,
} from '@/store/useAuthStore'

const SECOND_TO_MILLISECOND_COEFFICIENT = 1000

export const useGetAccessToken = (): void => {
  const setTokensData = useUserSettings(selectSetTokensData)
  const ttl = useUserSettings(selectTtl)
  const refreshToken = useUserSettings(selectRefreshToken)
  const accessToken = useUserSettings(selectAccessToken)

  useEffect(() => {
    ;(async () => {
      if (!accessToken) {
        const res = await authAPI.byPassword()

        setTokensData(res)
      } else if (ttl * SECOND_TO_MILLISECOND_COEFFICIENT < Date.now()) {
        const res = await authAPI.refreshToken(refreshToken)

        setTokensData(res)
      }
    })()
  }, [accessToken])
}
