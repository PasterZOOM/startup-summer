import { AuthResponseType } from '@/api/auth/types'
import { instance } from '@/api/instance'
import { REQUEST_PATHS } from '@/enums/paths'

export const authAPI = {
  byPassword: () =>
    instance
      .get<AuthResponseType>(`${REQUEST_PATHS.AUTH}password/`, {
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
    instance
      .get<AuthResponseType>(`${REQUEST_PATHS.AUTH}refresh_token/`, {
        params: {
          refresh_token: token,
          client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        },
      })
      .then(res => res.data),
}
