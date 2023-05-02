import axios from 'axios'

export const authInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
  },
})
