import axios from 'axios'

export const authInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'x-secret-key': process.env.NEXT_PUBLIC_X_SECRET_KEY,
  },
})
