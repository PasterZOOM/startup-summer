import axios from 'axios'

import { AuthByPasswordResponseType } from '@/api/auth/types'

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
  },
})

instance.interceptors.request.use(async req => {
  const request = { ...req }

  if (typeof window !== 'undefined') {
    const authData = localStorage.getItem('auth')

    if (authData) {
      const { access_token: accessToken, token_type: tokenType }: AuthByPasswordResponseType =
        JSON.parse(authData).state

      request.headers.Authorization = `${tokenType} ${accessToken}`
    }
  }
  request.headers.set('X-Api-App-Id', process.env.NEXT_PUBLIC_CLIENT_SECRET)

  return request
})
