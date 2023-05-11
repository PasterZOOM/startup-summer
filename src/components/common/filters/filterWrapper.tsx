import { memo, ReactNode } from 'react'

export const FilterWrapper = memo(({ children, title }: PropsType) => {
  return (
    <div className="space-y-2">
      <div className="text-title-base-mb font-bold text-black">{title}</div>
      {children}
    </div>
  )
})

type PropsType = {
  title: string
  children: ReactNode
}
