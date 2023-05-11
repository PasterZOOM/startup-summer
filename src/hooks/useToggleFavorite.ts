import { ChangeEvent, useState, MouseEvent } from 'react'

import { VacancyType } from '@/api/vacancies/types'
import {
  selectAddVacancy,
  selectIsFavorite,
  selectRemoveVacancy,
  useFavoriteVacanciesStore,
} from '@/stores/useFavoritVacanciesStore'

export const useToggleFavorite = (
  vacancy: VacancyType
): {
  inFavorite: boolean
  onFavoriteStareClick: (e: MouseEvent | ChangeEvent) => void
} => {
  const addVacancy = useFavoriteVacanciesStore(selectAddVacancy)
  const removeVacancy = useFavoriteVacanciesStore(selectRemoveVacancy)

  const [inFavorite, setInFavorite] = useState(
    useFavoriteVacanciesStore(selectIsFavorite(vacancy.id))
  )

  const onFavoriteStareClick = (e: MouseEvent | ChangeEvent): void => {
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
