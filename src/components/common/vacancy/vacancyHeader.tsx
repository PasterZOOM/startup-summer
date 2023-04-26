import { FC } from 'react'

import { FavoriteStare } from '@/components/common/ui/checkboxes/favoriteStare'
import { Paper } from '@/components/common/ui/wrappers/paper'
import { Location } from '@/components/common/vacancy/common/location'
import { VacancyTitle } from '@/components/common/vacancy/common/vacancyTitle'

export const VacancyHeader: FC = () => {
  return (
    <Paper className="flex w-full max-w-193.25 items-start justify-between p-6">
      <div className="space-y-4">
        <VacancyTitle className="text-title-l font-bold">Менеджер-дизайнер</VacancyTitle>
        <div className="flex gap-3 text-title-s ">
          <div className="font-bold">з/п от 70000 rub</div>
          <div className="text-gray-600">•</div>
          <div>Полный рабочий день</div>
        </div>
        <Location className="text-title-base-m">Новый Уренгой</Location>
      </div>
      <FavoriteStare isChecked />
    </Paper>
  )
}
