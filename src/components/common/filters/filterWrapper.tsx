import { FC, ReactNode } from 'react'

export const FilterWrapper: FC<PropsType> = ({ children, title }) => {
  return (
    <div className="space-y-2">
      <div className="text-title-base-mb font-bold text-black">{title}</div>
      {children}
    </div>
  )
}

type PropsType = {
  title: string
  children: ReactNode
}
