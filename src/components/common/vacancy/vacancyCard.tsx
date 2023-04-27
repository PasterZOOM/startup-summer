import { FC } from 'react'

import { FavoriteStare } from '@/components/common/ui/checkboxes/favoriteStare'
import { Paper } from '@/components/common/ui/wrappers/paper'
import { Location } from '@/components/common/vacancy/common/location'
import { VacancyTitle } from '@/components/common/vacancy/common/vacancyTitle'

export const VacancyCard: FC = () => {
  return (
    <Paper className="flex items-start justify-between p-6" tabIndex={0}>
      <div className="space-y-3">
        <VacancyTitle className="text-title-ss font-semibold text-blue-main-500">
          Менеджер-дизайнер
        </VacancyTitle>
        <div className="flex gap-3">
          <div className="font-semibold">з/п от 70000 rub</div>
          <div className="text-gray-600">•</div>
          <div>Полный рабочий день</div>
        </div>
        <Location className="text-title-base-mb">Новый Уренгой</Location>
      </div>
      <FavoriteStare isChecked/>
    </Paper>
  )
}
