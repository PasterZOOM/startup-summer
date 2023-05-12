import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { HeaderLinks } from '@/components/common/header/links/headerLinks'
import { ROUT_PATHS } from '@/enums/paths'
import { selectParamsState, useParamsStore } from '@/stores/useParamsStore'
import { getQueryParamsFromParams } from '@/utils/getQueryParamsFromParams'

export const VacanciesLink: FC = () => {
  const { t } = useTranslation('common')

  const vacanciesTitle = t('vacanciesTitle', 'Поиск Вакансий')
  const [params] = useParamsStore(selectParamsState)

  return (
    <HeaderLinks
      href={{ pathname: ROUT_PATHS.VACANCIES, query: { ...getQueryParamsFromParams(params) } }}
    >
      {vacanciesTitle}
    </HeaderLinks>
  )
}
