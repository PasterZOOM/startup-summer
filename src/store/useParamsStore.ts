import { create } from 'zustand'

import { GetVacanciesParamsType } from '@/api/vacancies/types'

type StateType = { params: GetVacanciesParamsType }
type ActionsType = {
  setQueryParams: SetQueryParamsFnType
  clearQueryParams: ClearQueryParamsFnType
  setKeyword: SetFunctionType
  setPaymentFrom: SetFunctionType
  setPaymentTo: SetFunctionType
  setCatalogues: SetFunctionType
}
type StoreType = ActionsType & StateType

const initialState: StateType = {
  params: {},
}

export const useParamsStore = create<StoreType>((set, get) => ({
  ...initialState,
  setQueryParams: params => set({ params }),
  clearQueryParams: () => set(initialState),
  setKeyword: keyword => set({ params: { ...get().params, keyword } }),
  setPaymentFrom: paymentFrom => set({ params: { ...get().params, payment_from: paymentFrom } }),
  setPaymentTo: paymentTo => set({ params: { ...get().params, payment_to: paymentTo } }),
  setCatalogues: catalogues => set({ params: { ...get().params, catalogues } }),
}))

export const selectParamsState: StateSelectorType<GetVacanciesParamsType> = store => [
  store.params,
  store.setQueryParams,
]
export const selectKeywordState: StateSelectorType = store => [
  store.params.keyword,
  store.setKeyword,
]
export const selectPaymentFrom: StateSelectorType = store => [
  store.params.payment_from,
  store.setPaymentFrom,
]
export const selectPaymentTo: StateSelectorType = store => [
  store.params.payment_to,
  store.setPaymentTo,
]
export const selectCatalogues: StateSelectorType = store => [
  store.params.catalogues,
  store.setCatalogues,
]

export const selectClearParams = (store: StoreType): ClearQueryParamsFnType =>
  store.clearQueryParams

type SetFunctionType<T = string | undefined> = (value: T) => void
type StateSelectorType<T = string | undefined> = (store: StoreType) => [T, SetFunctionType<T>]

type SetQueryParamsFnType = (params: GetVacanciesParamsType) => void
type ClearQueryParamsFnType = () => void
