import { FC } from 'react'

import { VacancyType } from '@/api/vacancies/types'
import { Paper } from '@/components/common/ui/wrappers/paper'

type PropsType = {
  vacancy: VacancyType
}

export const VacancyInfo: FC<PropsType> = ({ vacancy }) => {
  return (
    <Paper className="p-4 md:p-6">
      <div dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }} />
    </Paper>
  )
}
