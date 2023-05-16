import { memo } from 'react'

import Link from 'next/link'

import { VacancyType } from '@/api/vacancies/types'
import { FavoriteStare } from '@/components/common/ui/checkboxes/favoriteStare'
import { Paper } from '@/components/common/ui/wrappers/paper'
import { Location } from '@/components/common/vacancy/common/location'
import { Salary } from '@/components/common/vacancy/common/salary'
import { VacancyTitle } from '@/components/common/vacancy/common/vacancyTitle'
import { ROUT_PATHS } from '@/enums/paths'

type PropsType = {
  vacancy: VacancyType
}
export const VacancyCard = memo(({ vacancy }: PropsType) => {
  return (
    <Link
      data-elem={`vacancy-${vacancy.id}`}
      href={`${ROUT_PATHS.VACANCIES}/${vacancy.id}`}
      className="block rounded-xl focus:outline-offset-4 focus:outline-blue-main-500"
    >
      <Paper className="p-4 transition hover:bg-gray-50 hover:shadow-black md:p-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <VacancyTitle className="text-title-ss font-semibold text-blue-main-500">
              {vacancy.profession}
            </VacancyTitle>
            <FavoriteStare vacancy={vacancy} />
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
    </Link>
  )
})
