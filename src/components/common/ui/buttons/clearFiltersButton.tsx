import { FC } from 'react'

import { Button } from '@mantine/core'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { ClearIcon } from '@/components/svg/clearIcon'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { selectClearParams, useParamsStore } from '@/store/useParamsStore'

export const ClearFiltersButton: FC = () => {
  const { t } = useTranslation('filters')
  const { pathname, replace } = useRouter()
  const clearParams = useParamsStore(selectClearParams)
  const { isFetching } = useGetAllVacancies()

  const onButtonClick = async (): Promise<void> => {
    await clearParams()
    await replace({ pathname }, undefined, { shallow: true })
  }

  const resetAllButtonTitle = t('resetAllButtonTitle', 'Сбросить все')

  return (
    <Button
      variant="white"
      radius="md"
      compact
      className="group p-0 text-sub-title text-gray-500 transition hover:text-blue-main-500 disabled:bg-transparent"
      rightIcon={<ClearIcon />}
      onClick={onButtonClick}
      disabled={isFetching}
    >
      {resetAllButtonTitle}
    </Button>
  )
}
