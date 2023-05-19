import { FC } from 'react'

type PropsType = {
  from: number
  to: number
  currency: string
  className: string
}

export const Salary: FC<PropsType> = ({ from, to, currency, className }) => {
  let text = `${from} - ${to} ${currency}`

  if (!to && from) {
    text = `от ${from} ${currency}`
  }
  if (to && !from) {
    text = `до ${to} ${currency}`
  }
  if (from && to && to === from) {
    text = `${to} ${currency}`
  }
  if (!from && !to) {
    text = 'по договоренности'
  }

  return <div className={className}>з/п {text}</div>
}
