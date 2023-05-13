import { FC, KeyboardEvent } from 'react'

import { VacancyType } from '@/api/vacancies/types'
import { StarIcon } from '@/components/svg/starIcon'
import { useToggleFavorite } from '@/hooks/useToggleFavorite'

type PropsType = {
  vacancy: VacancyType
}

export const FavoriteStare: FC<PropsType> = ({ vacancy }) => {
  const { inFavorite, onFavoriteStareClick } = useToggleFavorite(vacancy)

  const onKeyEnter = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') {
      onFavoriteStareClick(e)
    }
  }

  return (
    <div
      onClick={onFavoriteStareClick}
      onKeyDown={onKeyEnter}
      aria-hidden
      className="flex cursor-pointer items-center justify-center"
    >
      <input
        data-elem={`vacancy-${vacancy.id}-shortlist-button`}
        type="checkbox"
        value={inFavorite.toString()}
        checked={inFavorite}
        onChange={onFavoriteStareClick}
        className="absolute opacity-0"
        tabIndex={-1}
      />
      <StarIcon
        tabIndex={0}
        className={`relative transition hover:fill-blue-400 hover:text-blue-400 focus:outline-0 focus:hover:fill-blue-400 ${
          inFavorite
            ? 'fill-blue-main-500 text-blue-main-500 focus:fill-blue-600 focus:text-blue-600'
            : 'text-gray-500 focus:text-blue-main-500'
        }`}
      />
    </div>
  )
}
