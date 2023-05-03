import { FC, ReactNode } from 'react'

type PropsType = {
  className?: string
  children: ReactNode
}

export const MainContainer: FC<PropsType> = ({ className = '', children }) => {
  return <main className={`w-full max-w-193.25 ${className}`}>{children}</main>
}
