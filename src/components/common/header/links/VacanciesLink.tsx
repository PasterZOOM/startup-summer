import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { HeaderLinks } from '@/components/common/header/links/headerLinks'
import { ROUT_PATHS } from '@/enums/paths'
import { selectParamsState, useParamsStore } from '@/stores/useParamsStore'
import { getQueryParamsFromParams } from '@/utils/getQueryParamsFromParams'

type PropsType = {
  onClickCallBack?: () => void
}
export const VacanciesLink: FC<PropsType> = ({ onClickCallBack }) => {
  const { t } = useTranslation('common')

  const vacanciesTitle = t('vacanciesTitle')
  const [params] = useParamsStore(selectParamsState)

  return (
    <HeaderLinks
      href={{ pathname: ROUT_PATHS.VACANCIES, query: { ...getQueryParamsFromParams(params) } }}
      onClickCallBack={onClickCallBack}
    >
      {vacanciesTitle}
    </HeaderLinks>
  )
}
