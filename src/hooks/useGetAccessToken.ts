import { useEffect } from 'react'

import { authAPI } from '@/api/auth/authAPI'
import { SECOND_TO_MILLISECOND_COEFFICIENT } from '@/constatnts/constants'
import {
  selectAccessToken,
  selectRefreshToken,
  selectSetInitialize,
  selectSetTokensData,
  selectTtl,
  useUserSettings,
} from '@/stores/useAuthStore'

export const useGetAccessToken = (): void => {
  const setTokensData = useUserSettings(selectSetTokensData)
  const setInitialize = useUserSettings(selectSetInitialize)
  const ttl = useUserSettings(selectTtl)
  const refreshToken = useUserSettings(selectRefreshToken)
  const accessToken = useUserSettings(selectAccessToken)

  useEffect(() => {
    ;(async () => {
      try {
        if (!accessToken) {
          const res = await authAPI.byPassword()

          setTokensData(res)
        } else if (ttl * SECOND_TO_MILLISECOND_COEFFICIENT < Date.now()) {
          const res = await authAPI.refreshToken(refreshToken)

          setTokensData(res)
        }
      } catch (e) {
        /* empty */
      } finally {
        setInitialize(true)
      }
    })()
  }, [])
}
