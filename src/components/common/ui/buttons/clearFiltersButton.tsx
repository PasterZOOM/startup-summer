import { FC } from 'react'

import { Button } from '@mantine/core'

import { ClearIcon } from '@/components/svg/clearIcon'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { selectClearParams, useParamsStore } from '@/store/useParamsStore'

export const ClearFiltersButton: FC = () => {
  const clearParams = useParamsStore(selectClearParams)
  const { refetch } = useGetAllVacancies()

  const onButtonClick = async (): Promise<void> => {
    await clearParams()
    await refetch()
  }

  return (
    <Button
      variant="white"
      radius="md"
      compact
      className="p-0 text-sub-title text-gray-500"
      rightIcon={<ClearIcon />}
      onClick={onButtonClick}
    >
      Сбросить все
    </Button>
  )
}
