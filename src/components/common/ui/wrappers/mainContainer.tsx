import { memo, ReactNode } from 'react'

type PropsType = {
  className?: string
  children: ReactNode
}

export const MainContainer = memo(({ className = '', children }: PropsType) => {
  return <main className={`w-full max-w-193.25 ${className}`}>{children}</main>
})
