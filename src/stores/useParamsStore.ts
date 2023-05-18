import { create } from 'zustand'

import { GetVacanciesParamsType } from '@/api/vacancies/types'

type StateType = GetVacanciesParamsType
type ActionsType = {
  setQueryParams: SetQueryParamsFnType
  clearQueryParams: ClearQueryParamsFnType
  setKeyword: SetFunctionType
  setPaymentFrom: SetFunctionType
  setPaymentTo: SetFunctionType
  setCatalogues: SetFunctionType
  setPageCount: SetFunctionType
  setPage: SetFunctionType
}
type StoreType = ActionsType & StateType

const initialState: StateType = {
  page: undefined,
  payment_to: undefined,
  count: '4',
  catalogues: undefined,
  keyword: undefined,
  payment_from: undefined,
  no_agreement: undefined,
}

export const useParamsStore = create<StoreType>((set, get) => ({
  ...initialState,
  setQueryParams: params => {
    if (JSON.stringify(params) === '{}') {
      set(initialState)
    } else {
      set({ ...initialState, ...params })
    }
  },
  clearQueryParams: page => set({ ...initialState, page, keyword: get().keyword }),
  setKeyword: keyword => set({ keyword }),
  setPaymentFrom: payment_from => set({ payment_from }),
  setPaymentTo: payment_to => set({ payment_to }),
  setCatalogues: catalogues => set({ catalogues }),
  setPageCount: count => set({ count }),
  setPage: page => set({ page }),
}))

export const selectParamsState: StateSelectorType<StateType> = ({
  payment_from,
  payment_to,
  keyword,
  catalogues,
  page,
  ...store
}) => [{ payment_from, page, keyword, payment_to, catalogues }, store.setQueryParams]
export const selectKeywordState: StateSelectorType = store => [store.keyword, store.setKeyword]
export const selectPaymentFrom: StateSelectorType = store => [
  store.payment_from,
  store.setPaymentFrom,
]
export const selectPaymentTo: StateSelectorType = store => [store.payment_to, store.setPaymentTo]
export const selectCatalogues: StateSelectorType = store => [store.catalogues, store.setCatalogues]
export const selectPageCount: StateSelectorType = store => [store.count, store.setPageCount]
export const selectPage: StateSelectorType = store => [store.page, store.setPage]

export const selectClearParams = (store: StoreType): ClearQueryParamsFnType =>
  store.clearQueryParams

type SetFunctionType<T = string | undefined> = (value: T) => void
type StateSelectorType<T = string | undefined> = (store: StoreType) => [T, SetFunctionType<T>]

type SetQueryParamsFnType = (params: GetVacanciesParamsType) => void
type ClearQueryParamsFnType = (page?: string) => void
