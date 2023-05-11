import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { AuthResponseType } from '@/api/auth/types'

type StateType = AuthResponseType
type ActionsType = { setTokensData: SetAccessTokenFnType; clearTokenData: () => void }
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
      setTokensData: res => set(res),
      clearTokenData: () => set(initialState),
    }),
    { name: 'auth' }
  )
)

export const selectTtl = (store: StoreType): number => store.ttl
export const selectRefreshToken = (store: StoreType): string => store.refresh_token
export const selectAccessToken = (store: StoreType): string => store.access_token
export const selectSetTokensData = (store: StoreType): SetAccessTokenFnType => store.setTokensData
export const selectClearTokenData = (store: StoreType): (() => void) => store.clearTokenData

type SetAccessTokenFnType = (res: AuthResponseType) => void
