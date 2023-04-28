import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { VacancyType } from '@/api/vacancies/types'

type StateType = { vacancies: Record<string, VacancyType> }
type ActionsType = {
  addVacancy: SetAddVacancyFnType
  removeVacancy: SetRemoveVacancyFnType
}
type StoreType = ActionsType & StateType

const initialState: StateType = {
  vacancies: {},
}

export const useFavoriteVacanciesStore = create(
  persist<StoreType>(
    (set, get) => ({
      ...initialState,
      addVacancy: vacancy => set({ vacancies: { ...get().vacancies, [vacancy.id]: vacancy } }),
      removeVacancy: id => {
        const { vacancies } = get()

        delete vacancies[id]
        const temp = { ...vacancies }

        set({ vacancies: temp })
      },
    }),
    { name: 'favorite' }
  )
)

export const selectVacancies = (store: StoreType): Record<string, VacancyType> => store.vacancies
export const selectAddVacancy = (store: StoreType): SetAddVacancyFnType => store.addVacancy
export const selectRemoveVacancy = (store: StoreType): SetRemoveVacancyFnType => store.removeVacancy

type SetAddVacancyFnType = (vacancy: VacancyType) => void
type SetRemoveVacancyFnType = (id: number) => void
