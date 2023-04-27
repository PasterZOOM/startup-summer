import { FC, ReactNode } from 'react'

type PropsType = {
  children: ReactNode
  className?: string
  tabIndex?: number
}

export const Paper: FC<PropsType> = ({ className, children, tabIndex }) => {
  return (
    <section
      className={`rounded-xl border border-gray-200 bg-white focus:outline-offset-4 focus:outline-blue-main-500 ${
        className ?? ''
      }`}
      tabIndex={tabIndex}
    >
      {children}
    </section>
  )
}
