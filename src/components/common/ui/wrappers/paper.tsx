import { ComponentProps, FC } from 'react'

type PropsType = ComponentProps<'section'>

export const Paper: FC<PropsType> = ({ className, children, ...restProps }) => {
  return (
    <section
      className={`rounded-xl border border-gray-200 bg-white focus:outline-offset-4 focus:outline-blue-main-500 ${
        className ?? ''
      }`}
      {...restProps}
    >
      {children}
    </section>
  )
}
