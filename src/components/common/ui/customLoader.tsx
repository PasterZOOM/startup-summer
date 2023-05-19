import { FC } from 'react'

import { Loader } from '@mantine/core'

export const CustomLoader: FC = () => {
  return (
    <div className="flex h-75 w-full items-center justify-center md:h-125">
      <Loader />
    </div>
  )
}
