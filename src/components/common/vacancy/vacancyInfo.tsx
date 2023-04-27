import { FC } from 'react'

import { Paper } from '@/components/common/ui/wrappers/paper'
import { VacancyInfoBlock } from '@/components/common/vacancy/common/vacancyInfoBlock'
import { conditions, requirements, responsibilitiesMock } from '@/mocks/vacancyInfoMock'

export const VacancyInfo: FC = () => {
  return (
    <Paper className="space-y-5 p-6">
      <VacancyInfoBlock title="Обязанности" items={responsibilitiesMock} />
      <VacancyInfoBlock title="Требования" items={requirements} />
      <VacancyInfoBlock title="Условия" items={conditions} />
    </Paper>
  )
}
