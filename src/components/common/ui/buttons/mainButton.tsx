import { FC } from 'react'

import { Button } from '@mantine/core'
import { ButtonProps } from '@mantine/core/lib/Button/Button'

type PropsType = {
  onClick: () => void
} & ButtonProps

export const MainButton: FC<PropsType> = ({ children, className = '', ...restProps }) => {
  return (
    <Button
      data-elem="search-button"
      radius="md"
      className={`bg-blue-main-500 hover:bg-blue-400 active:bg-blue-600 ${className}`}
      {...restProps}
    >
      {children}
    </Button>
  )
}
