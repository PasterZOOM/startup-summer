import { FC } from 'react'

import { Button } from '@mantine/core'

import { ClearIcon } from '@/components/svg/clearIcon'

export const ClearFiltersButton: FC = () => {
  return (
    <Button
      variant="white"
      radius="md"
      compact
      className="p-0 text-sub-title text-gray-500"
      rightIcon={<ClearIcon />}
    >
      Сбросить все
    </Button>
  )
}
