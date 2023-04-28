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
    <Paper className="flex items-start justify-between p-6" tabIndex={0}>
      <div className="space-y-3">
        <VacancyTitle className="text-title-ss font-semibold text-blue-main-500">
          {vacancy.profession}
        </VacancyTitle>
        <div className="flex gap-3">
          <Salary
            from={vacancy.payment_from}
            to={vacancy.payment_to}
            className="font-semibold"
            currency={vacancy.currency}
          />
          <div className="text-gray-600">•</div>
          <div>{vacancy.type_of_work.title}</div>
        </div>
        <Location className="w-fit text-title-base-mb">{vacancy.town.title}</Location>
      </div>
      <FavoriteStare
        data-elem={`vacancy-${vacancy.id}-shortlist-button`}
        isChecked={inFavorite}
        onClick={onFavoriteStareClick}
      />
    </Paper>
  )
}
