import { FC } from 'react'

import { Loader } from '@mantine/core'

export const CustomLoader: FC = () => {
  return (
    <div className="flex h-125 w-full items-center justify-center">
      <Loader />
    </div>
  )
}
