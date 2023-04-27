import { FC, useEffect } from 'react'

import { Pagination } from '@mantine/core'

import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { selectPage, selectPageCount, useParamsStore } from '@/store/useParamsStore'

const DEFAULT_PAGE_COUNT = 20

export const PaginationBlock: FC = () => {
  const [pageCount] = useParamsStore(selectPageCount)
  const [page, setPage] = useParamsStore(selectPage)
  const { data, refetch } = useGetAllVacancies()

  const onPaginationChange = async (value: number): Promise<void> => {
    setPage(value.toString())
  }

  useEffect(() => {
    refetch().then()
  }, [page])

  return (
    <div className="flex justify-center">
      <Pagination
        value={+(page ?? 1)}
        total={(data?.total ?? 1) / +(pageCount ?? DEFAULT_PAGE_COUNT)}
        onChange={onPaginationChange}
      />
    </div>
  )
}
