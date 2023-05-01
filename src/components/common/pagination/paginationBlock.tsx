import { FC, useEffect } from 'react'

import { Pagination } from '@mantine/core'
import { useRouter } from 'next/router'

import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { selectPage, selectPageCount, useParamsStore } from '@/store/useParamsStore'
import { TABLET_WIDTH, useWindowSize } from '@/store/useWindowSize'

const DEFAULT_PAGE_COUNT = 4
const MAX_ITEMS = 500

export const PaginationBlock: FC = () => {
  const { query, replace, pathname } = useRouter()
  const { width } = useWindowSize()

  const [pageCount] = useParamsStore(selectPageCount)
  const [page, setPage] = useParamsStore(selectPage)

  const { refetch } = useGetAllVacancies()
  const { data } = useGetAllVacancies()

  const onPaginationChange = async (value: number): Promise<void> => {
    setPage(value.toString())
    await replace({ pathname, query: { ...query, page: value.toString() } }, undefined, {
      shallow: true,
    })
  }

  useEffect(() => {
    refetch().then()
  }, [query])

  return (
    <div className="flex justify-center">
      <Pagination
        value={+(page ?? 1)}
        size={width < TABLET_WIDTH ? 'sm' : 'md'}
        total={Math.floor(
          (+(data?.total ?? 1) > MAX_ITEMS ? MAX_ITEMS : +(data?.total ?? 1)) /
            +(pageCount ?? DEFAULT_PAGE_COUNT)
        )}
        onChange={onPaginationChange}
      />
    </div>
  )
}
