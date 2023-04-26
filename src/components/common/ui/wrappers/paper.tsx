import { FC, ReactNode } from 'react'

type PropsType = {
  children: ReactNode
  className?: string
}

export const Paper: FC<PropsType> = ({ className, children }) => {
  return (
    <section className={`rounded-xl border border-gray-200 bg-white ${className ?? ''}`}>
      {children}
    </section>
  )
}
