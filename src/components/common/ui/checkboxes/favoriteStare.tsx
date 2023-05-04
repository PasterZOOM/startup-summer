import { ComponentProps, FC } from 'react'

import { StarIcon } from '@/components/svg/starIcon'

type PropsType = {
  isChecked: boolean
} & ComponentProps<'div'>

export const FavoriteStare: FC<PropsType> = ({ isChecked, ...restProps }) => {
  return (
    <div {...restProps}>
      <StarIcon
        tabIndex={0}
        className={`cursor-pointer transition hover:fill-blue-400 hover:text-blue-400 focus:outline-0 focus:hover:fill-blue-400 ${
          isChecked
            ? 'fill-blue-main-500 text-blue-main-500 focus:fill-blue-600 focus:text-blue-600'
            : 'text-gray-500 focus:text-blue-main-500'
        }`}
      />
    </div>
  )
}
