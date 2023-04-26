import { FC } from 'react'

import { StarIcon } from '@/components/svg/starIcon'

export const FavoriteStare: FC<PropsType> = ({ isChecked }) => {
  return (
    <StarIcon className={isChecked ? 'fill-blue-main-500 text-blue-main-500' : 'text-gray-500'} />
  )
}

type PropsType = {
  isChecked: boolean
}
