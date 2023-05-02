import { AuthErrorType } from '@/api/auth/types'
import { selectClearTokenData, useUserSettings } from '@/store/useAuthStore'

export const useAuthError = (): ((data: AuthErrorType) => void) => {
  const clearTokensData = useUserSettings(selectClearTokenData)

  return (data: AuthErrorType) => {
    if (data.error.error === 'invalid_token') {
      clearTokensData()
    }
  }
}
