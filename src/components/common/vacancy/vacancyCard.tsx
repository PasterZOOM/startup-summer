import { FC } from 'react'

import { VacancyType } from '@/api/vacancies/types'
import { FavoriteStare } from '@/components/common/ui/checkboxes/favoriteStare'
import { Paper } from '@/components/common/ui/wrappers/paper'
import { Location } from '@/components/common/vacancy/common/location'
import { Salary } from '@/components/common/vacancy/common/salary'
import { VacancyTitle } from '@/components/common/vacancy/common/vacancyTitle'
import { useToggleFavorite } from '@/hooks/useToggleFavorite'

type PropsType = {
  vacancy: VacancyType
}
export const VacancyCard: FC<PropsType> = ({ vacancy }) => {
  const { inFavorite, onFavoriteStareClick } = useToggleFavorite(vacancy)

  return (
    <Paper className="p-4 transition hover:bg-gray-50 hover:shadow-black md:p-6">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <VacancyTitle className="text-title-ss font-semibold text-blue-main-500">
            {vacancy.profession}
          </VacancyTitle>
          <FavoriteStare
            data-elem={`vacancy-${vacancy.id}-shortlist-button`}
            isChecked={inFavorite}
            onClick={onFavoriteStareClick}
          />
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          <Salary
            from={vacancy.payment_from}
            to={vacancy.payment_to}
            className="font-semibold"
            currency={vacancy.currency}
          />
          <div className="hidden text-gray-600 md:block">•</div>
          <div>{vacancy.type_of_work.title}</div>
        </div>
        <Location className="text-title-base-mb">{vacancy.town.title}</Location>
      </div>
    </Paper>
  )
}
