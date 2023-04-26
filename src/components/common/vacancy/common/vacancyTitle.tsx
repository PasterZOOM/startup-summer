import { FC, ReactNode } from 'react'

type PropsType = {
  className?: string
  children: ReactNode
}

export const VacancyTitle: FC<PropsType> = ({ className, children }) => {
  return <h2 className={className ?? ''}>{children}</h2>
}
