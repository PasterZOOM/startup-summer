import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { AuthResponseType } from '@/api/auth/types'

export type AuthStateType = { auth: AuthResponseType; isInitialize: boolean }
type ActionsType = {
  setTokensData: SetAccessTokenFnType
  setInitialize: (initialize: boolean) => void
}
type StoreType = ActionsType & AuthStateType

const initialState: AuthStateType = {
  auth: {
    access_token: '',
    expires_in: 0,
    ttl: 0,
    refresh_token: '',
    token_type: '',
  },
  isInitialize: false,
}

export const useUserSettings = create(
  persist<StoreType>(
    set => ({
      ...initialState,
      setTokensData: auth => set({ auth }),
      setInitialize: isInitialize => set({ isInitialize }),
    }),
    { name: 'auth' }
  )
)

export const selectTtl = (store: StoreType): number => store.auth.ttl
export const selectRefreshToken = (store: StoreType): string => store.auth.refresh_token
export const selectAccessToken = (store: StoreType): string => store.auth.access_token
export const selectIsInitialize = (store: StoreType): boolean => store.isInitialize
export const selectSetTokensData = (store: StoreType): SetAccessTokenFnType => store.setTokensData
export const selectSetInitialize = (store: StoreType): SetInitializeFnType => store.setInitialize

type SetAccessTokenFnType = (auth: AuthResponseType) => void
type SetInitializeFnType = (isInitialize: boolean) => void
