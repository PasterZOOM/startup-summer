import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { AuthByPasswordResponseType } from '@/api/auth/types'

type StateType = AuthByPasswordResponseType
type ActionsType = { setAccessToken: SetAccessTokenFnType }
type StoreType = ActionsType & StateType

const initialState: StateType = {
  access_token: '',
  expires_in: 0,
  ttl: 0,
  refresh_token: '',
  token_type: '',
}

export const useUserSettings = create(
  persist<StoreType>(
    set => ({
      ...initialState,
      setAccessToken: res => set(res),
    }),
    { name: 'auth' }
  )
)

export const selectAccessToken = (store: StoreType): string => store.access_token
export const selectSetAccessToken = (store: StoreType): SetAccessTokenFnType => store.setAccessToken

type SetAccessTokenFnType = (res: AuthByPasswordResponseType) => void
