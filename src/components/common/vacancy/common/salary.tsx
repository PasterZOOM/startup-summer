import { FC } from 'react'

type PropsType = {
  from: number
  to: number
  currency: string
  className: string
}
export const Salary: FC<PropsType> = ({ from, to, currency, className }) => {
  return (
    <div className={className}>
      з/п {!from && !to && 'по договоренности'} {!to && !!from && 'от'} {!!from && from}{' '}
      {!!from && !!to && '-'} {!!to && to} {(!!from || !!to) && currency}
    </div>
  )
}
