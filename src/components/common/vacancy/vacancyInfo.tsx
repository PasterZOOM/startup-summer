import { FC } from 'react'

import { VacancyType } from '@/api/vacancies/types'
import { Paper } from '@/components/common/ui/wrappers/paper'

type PropsType = {
  vacancy: VacancyType
}
export const VacancyInfo: FC<PropsType> = ({ vacancy }) => {
  return (
    <Paper className="space-y-5 p-6">
      <div className="Container" dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }} />
    </Paper>
  )
}
