import { memo } from 'react'

import { Pagination } from '@mantine/core'

import { TABLET_WIDTH, useWindowSize } from '@/hooks/useWindowSize'

type PropsType = {
  page: number
  total: number
  onChange: (value: number) => void
}

export const MainPagination = memo(({ page, total, onChange }: PropsType) => {
  const { width } = useWindowSize()

  return (
    <Pagination
      value={page}
      className="pagination"
      size={width < TABLET_WIDTH ? 'sm' : 'md'}
      styles={{
        control: {
          '&[data-active]': { background: '#5E96FC' },
        },
      }}
      total={total}
      onChange={onChange}
    />
  )
})
