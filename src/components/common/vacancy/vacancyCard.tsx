import { FC } from 'react'

import { VacancyType } from '@/api/vacancies/types'
import { FavoriteStare } from '@/components/common/ui/checkboxes/favoriteStare'
import { Paper } from '@/components/common/ui/wrappers/paper'
import { Location } from '@/components/common/vacancy/common/location'
import { VacancyTitle } from '@/components/common/vacancy/common/vacancyTitle'

type PropsType = {
  vacancy: VacancyType
}
export const VacancyCard: FC<PropsType> = ({ vacancy }) => {
  return (
    <Paper className="flex items-start justify-between p-6" tabIndex={0}>
      <div className="space-y-3">
        <VacancyTitle className="text-title-ss font-semibold text-blue-main-500">
          {vacancy.profession}
        </VacancyTitle>
        <div className="flex gap-3">
          <div className="font-semibold">з/п от 70000 rub</div>
          <div className="text-gray-600">•</div>
          <div>{vacancy.place_of_work.title}</div>
        </div>
        <Location className="text-title-base-mb">{vacancy.town.title}</Location>
      </div>
      <FavoriteStare isChecked />
    </Paper>
  )
}
