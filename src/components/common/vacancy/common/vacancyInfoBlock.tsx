import { FC } from 'react'

import { v1 } from 'uuid'

type PropsType = {
  title: string
  items: string[]
}
export const VacancyInfoBlock: FC<PropsType> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-title-s font-bold">{title}:</h3>
      <ul className="ml-6 list-disc text-title-base-m">
        {items.map(item => (
          <li key={v1()}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
