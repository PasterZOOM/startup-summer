import { useState, MouseEvent } from 'react'

import { VacancyType } from '@/api/vacancies/types'
import {
  selectAddVacancy,
  selectRemoveVacancy,
  selectVacancies,
  useFavoriteVacanciesStore,
} from '@/store/useFavoritVacanciesStore'

export const useToggleFavorite = (
  vacancy: VacancyType
): { inFavorite: boolean; onFavoriteStareClick: (e: MouseEvent<HTMLDivElement>) => void } => {
  const vacancies = useFavoriteVacanciesStore(selectVacancies)
  const addVacancy = useFavoriteVacanciesStore(selectAddVacancy)
  const removeVacancy = useFavoriteVacanciesStore(selectRemoveVacancy)

  const [inFavorite, setInFavorite] = useState(!!vacancies[vacancy.id])

  const onFavoriteStareClick = (e: MouseEvent<HTMLDivElement>): void => {
    if (inFavorite) {
      removeVacancy(vacancy.id)
      setInFavorite(false)
    } else {
      addVacancy(vacancy)
      setInFavorite(true)
    }
    e.preventDefault()
  }

  return { inFavorite, onFavoriteStareClick }
}
