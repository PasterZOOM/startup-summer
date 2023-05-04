import { FC, ReactNode } from 'react'

import { LocationIcon } from '@/components/svg/locationIcon'

type PropsType = {
  className?: string
  children: ReactNode
}

export const Location: FC<PropsType> = ({ className = '', children }) => {
  return (
    <div
      className={`group flex w-fit gap-2  focus:outline-0 ${className}`}
      tabIndex={0}
      role="button"
    >
      <LocationIcon className="text-gray-600 transition group-hover:text-blue-main-500 group-focus:text-blue-main-500" />
      <div className="transition group-hover:text-blue-main-500 group-focus:text-blue-main-500">
        {children}
      </div>
    </div>
  )
}
