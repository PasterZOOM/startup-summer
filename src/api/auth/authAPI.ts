import axios from 'axios'

import { AuthByPasswordResponseType } from '@/api/auth/types'

export const authAPI = {
  byPassword: () =>
    axios
      .get<AuthByPasswordResponseType>('/oauth2/password', {
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
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
