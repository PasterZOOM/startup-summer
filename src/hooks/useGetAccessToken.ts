import { useEffect, useRef } from 'react'

import { authAPI } from '@/api/auth/authAPI'
import { selectSetAccessToken, useUserSettings } from '@/store/useAuthStore'

export const useGetAccessToken = (): void => {
  const setAccessToken = useUserSettings(selectSetAccessToken)

  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
    } else {
      ;(async () => {
        const res = await authAPI.byPassword()

        setAccessToken(res)
      })()
    }
  }, [])
}
