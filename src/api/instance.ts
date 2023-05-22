import axios from 'axios'

import { AuthStateType } from '@/stores/useAuthStore'

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
      const {
        auth: { access_token, token_type },
      }: AuthStateType = JSON.parse(authData).state

      if (access_token && token_type) {
        request.headers.Authorization = `${token_type} ${access_token}`
      }
    }
  }

  return request
})
