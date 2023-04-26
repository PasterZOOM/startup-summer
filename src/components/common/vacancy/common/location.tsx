import { FC, ReactNode } from 'react'

import { LocationIcon } from '@/components/svg/locationIcon'

type PropsType = {
  className?: string
  children: ReactNode
}

export const Location: FC<PropsType> = ({ className, children }) => {
  return (
    <div className={`flex gap-2 ${className ?? ''}`}>
      <LocationIcon />
      <div>{children}</div>
    </div>
  )
}
