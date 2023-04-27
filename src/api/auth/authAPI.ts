import { instance } from '@/api/instance'

export const authAPI = {
  byPassword: () =>
    instance
      .get<AuthByPasswordResponseType>('/oauth2/password', {
        params: {
          login: 'sergei.stralenia@gmail.com',
          password: 'paralect123',
          client_id: '2231',
          client_secret:
            'v3.r.137440105.399b9c5f19384345afe0ad0339e619e71c66af1d.800f8642a38256679e908c370c44267f705c2909',
          hr: '0',
        },
      })
      .then(res => res.data),
}

export type AuthByPasswordResponseType = {
  access_token: string
  refresh_token: string
  ttl: number
  expires_in: number
  token_type: string
}
