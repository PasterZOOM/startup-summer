import { AuthResponseType } from '@/api/auth/types'
import { authInstance } from '@/api/authInstance'

export const authAPI = {
  byPassword: () =>
    authInstance
      .get<AuthResponseType>('/oauth2/password', {
        params: {
          login: process.env.NEXT_PUBLIC_LOGIN,
          password: process.env.NEXT_PUBLIC_PASSWORD,
          client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
          hr: process.env.NEXT_PUBLIC_HR,
        },
      })
      .then(res => res.data),
  refreshToken: (token: string) =>
    authInstance
      .get<AuthResponseType>('/oauth2/refresh_token/', {
        params: {
          refresh_token: token,
          client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        },
      })
      .then(res => res.data),
}
