import { AuthErrorType } from '@/api/auth/types'
import { useRefreshToken } from '@/hooks/query/useRefreshToken'

export const useAuthError = (): ((data: AuthErrorType) => void) => {
  const { refetch } = useRefreshToken()

  return async (data: AuthErrorType) => {
    if (data.error.error === 'invalid_token') {
      await refetch()
    }
  }
}
