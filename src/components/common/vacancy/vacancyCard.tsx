import { FC, useState } from 'react'

import { VacancyType } from '@/api/vacancies/types'
import { FavoriteStare } from '@/components/common/ui/checkboxes/favoriteStare'
import { Paper } from '@/components/common/ui/wrappers/paper'
import { Location } from '@/components/common/vacancy/common/location'
import { VacancyTitle } from '@/components/common/vacancy/common/vacancyTitle'
import {
  selectAddVacancy,
  selectRemoveVacancy,
  selectVacancies,
  useFavoriteVacanciesStore,
} from '@/store/useFavoritVacanciesStore'

type PropsType = {
  vacancy: VacancyType
}
export const VacancyCard: FC<PropsType> = ({ vacancy }) => {
  const vacancies = useFavoriteVacanciesStore(selectVacancies)
  const addVacancy = useFavoriteVacanciesStore(selectAddVacancy)
  const removeVacancy = useFavoriteVacanciesStore(selectRemoveVacancy)

  const [inFavorite, setInFavorite] = useState(!!vacancies[vacancy.id])

  const onFavoriteStareClick = (): void => {
    if (inFavorite) {
      removeVacancy(vacancy.id)
      setInFavorite(false)
    } else {
      addVacancy(vacancy)
      setInFavorite(true)
    }
  }

  return (
    <Paper className="flex items-start justify-between p-6" tabIndex={0}>
      <div className="space-y-3">
        <VacancyTitle className="text-title-ss font-semibold text-blue-main-500">
          {vacancy.profession}
        </VacancyTitle>
        <div className="flex gap-3">
          <div className="font-semibold">
            з/п {!vacancy.payment_from && !vacancy.payment_to && 'не указана'}{' '}
            {!vacancy.payment_to && !!vacancy.payment_from && 'от'}{' '}
            {!!vacancy.payment_from && vacancy.payment_from}{' '}
            {!!vacancy.payment_from && !!vacancy.payment_to && '-'}{' '}
            {!!vacancy.payment_to && vacancy.payment_to}{' '}
            {!!vacancy.payment_from && !!vacancy.payment_to && vacancy.currency}
          </div>
          <div className="text-gray-600">•</div>
          <div>{vacancy.type_of_work.title}</div>
        </div>
        <Location className="w-fit text-title-base-mb">{vacancy.town.title}</Location>
      </div>
      <FavoriteStare isChecked={inFavorite} onClick={onFavoriteStareClick} />
    </Paper>
  )
}
