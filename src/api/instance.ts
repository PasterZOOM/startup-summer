import axios from 'axios'

import { AuthResponseType } from '@/api/auth/types'

const baseConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'X-Secret-Key': process.env.NEXT_PUBLIC_X_SECRET_KEY,
    'X-Api-App-Id': process.env.NEXT_PUBLIC_CLIENT_SECRET,
  },
}

export const instance = axios.create(baseConfig)
export const instanceWithAuth = axios.create(baseConfig)

instanceWithAuth.interceptors.request.use(async req => {
  const request = { ...req }

  if (typeof window !== 'undefined') {
    const authData = localStorage.getItem('auth')

    if (authData) {
      const { access_token: accessToken, token_type: tokenType }: AuthResponseType =
        JSON.parse(authData).state

      request.headers.Authorization = `${tokenType} ${accessToken}`
    }
  }

  return request
})
