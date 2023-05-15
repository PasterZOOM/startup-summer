import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'X-Secret-Key': process.env.NEXT_PUBLIC_X_SECRET_KEY,
    'X-Api-App-Id': process.env.NEXT_PUBLIC_CLIENT_SECRET,
  },
})
