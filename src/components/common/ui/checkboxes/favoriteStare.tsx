import { ChangeEvent, FC, KeyboardEvent, MouseEvent, useRef } from 'react'

import { VacancyType } from '@/api/vacancies/types'
import { StarIcon } from '@/components/svg/starIcon'
import {
  selectAddVacancy,
  selectIsFavorite,
  selectRemoveVacancy,
  useFavoriteVacanciesStore,
} from '@/stores/useFavoritVacanciesStore'

type PropsType = {
  vacancy: VacancyType
}

export const FavoriteStare: FC<PropsType> = ({ vacancy }) => {
  const ref = useRef<HTMLInputElement>(null)

  const addVacancy = useFavoriteVacanciesStore(selectAddVacancy)
  const removeVacancy = useFavoriteVacanciesStore(selectRemoveVacancy)

  const inFavorite = useFavoriteVacanciesStore(selectIsFavorite(vacancy.id))

  const onKeyStar = (e: ChangeEvent | MouseEvent | KeyboardEvent): void => {
    if (ref.current) {
      if (ref.current.checked) {
        removeVacancy(vacancy.id)
      } else {
        addVacancy(vacancy)
      }
      e.preventDefault()
    }
  }

  return (
    <div
      aria-hidden
      onClick={onKeyStar}
      onKeyDown={e => e.key === 'Enter' && onKeyStar(e)}
      className="flex cursor-pointer items-center justify-center focus:outline-offset-2 focus:outline-blue-500"
      role="button"
      tabIndex={0}
      data-elem={`vacancy-${vacancy.id}-shortlist-button`}
    >
      <input
        type="checkbox"
        checked={inFavorite}
        onChange={onKeyStar}
        className="absolute opacity-0"
        tabIndex={-1}
        ref={ref}
      />
      <StarIcon
        className={`relative transition hover:text-blue-400 focus:outline-offset-2 focus:outline-blue-500 ${
          inFavorite ? 'fill-blue-main-500 text-blue-main-500 ' : 'text-gray-500 '
        }`}
      />
    </div>
  )
}
