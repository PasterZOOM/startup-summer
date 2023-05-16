import { memo } from 'react'

import { Button } from '@mantine/core'
import { useTranslation } from 'next-i18next'

import { ClearIcon } from '@/components/svg/clearIcon'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { useClearParams } from '@/hooks/useClearParams'

export const ClearFiltersButton = memo(() => {
  const { t } = useTranslation('filters')
  const clearParams = useClearParams()
  const { data: vacancies } = useGetAllVacancies()

  const resetAllButtonTitle = t('resetAllButtonTitle')

  return (
    <Button
      variant="white"
      radius="md"
      compact
      className="group p-0 text-sub-title text-gray-500 transition hover:text-blue-400 active:text-blue-main-500 disabled:bg-transparent"
      rightIcon={<ClearIcon />}
      onClick={clearParams}
      disabled={!vacancies}
    >
      {resetAllButtonTitle}
    </Button>
  )
})
