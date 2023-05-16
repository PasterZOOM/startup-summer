import { FC, ReactNode } from 'react'

import Link from 'next/link'

import { LocationIcon } from '@/components/svg/locationIcon'

type PropsType = {
  className?: string
  children: ReactNode
}

export const Location: FC<PropsType> = ({ className = '', children }) => {
  return (
    <Link
      href={`https://www.google.com/maps/place/${children}`}
      className={`group flex w-fit items-center gap-2 focus:outline-offset-4 focus:outline-blue-main-500 ${className}`}
      onClick={e => e.stopPropagation()}
      target="_blank"
    >
      <LocationIcon className="text-gray-600 transition group-hover:text-blue-main-500 group-focus:text-blue-main-500" />
      <div className="transition group-hover:text-blue-main-500 group-focus:text-blue-main-500">
        {children}
      </div>
    </Link>
  )
}
