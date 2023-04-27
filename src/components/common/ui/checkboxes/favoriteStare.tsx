import { FC } from 'react'

import { StarIcon } from '@/components/svg/starIcon'

export const FavoriteStare: FC<PropsType> = ({ isChecked }) => {
  return (
    <StarIcon
      tabIndex={0}
      className={`cursor-pointer focus:outline-0 ${
        isChecked
          ? 'fill-blue-main-500 text-blue-main-500 focus:fill-gray-500'
          : 'text-gray-500 focus:text-blue-main-500'
      }`}
    />
  )
}

type PropsType = {
  isChecked: boolean
}
