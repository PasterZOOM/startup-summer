import { AuthByPasswordResponseType } from '@/api/auth/types'
import { instance } from '@/api/instance'

export const authAPI = {
  byPassword: () =>
    instance
      .get<AuthByPasswordResponseType>('/oauth2/password', {
        params: {
          login: process.env.NEXT_PUBLIC_LOGIN,
          password: process.env.NEXT_PUBLIC_PASSWORD,
          client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
          hr: process.env.NEXT_PUBLIC_HR,
        },
      })
      .then(res => res.data),
}
