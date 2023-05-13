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
      onClick={e => {
        onFavoriteStareClick(e)
      }}
      onMouseDown={e => e.preventDefault()}
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
        className={`relative transition hover:text-blue-400 focus:outline-offset-2 focus:outline-blue-500 ${
          inFavorite ? 'fill-blue-main-500 text-blue-main-500 ' : 'text-gray-500 '
        }`}
      />
    </div>
  )
}
