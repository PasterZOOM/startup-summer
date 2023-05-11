import { FC } from 'react'

import { Pagination } from '@mantine/core'
import { useRouter } from 'next/router'

import { DEFAULT_PAGE_COUNT, MAX_RESPONSE_ITEMS } from '@/constatnts/constants'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { TABLET_WIDTH, useWindowSize } from '@/hooks/useWindowSize'
import { selectPage, selectPageCount, useParamsStore } from '@/stores/useParamsStore'
import { countTotalPages } from '@/utils/countTotalPages'

export const PaginationBlock: FC = () => {
  const { query, replace, pathname } = useRouter()
  const { width } = useWindowSize()

  const [pageCount] = useParamsStore(selectPageCount)
  const [page, setPage] = useParamsStore(selectPage)

  const { data: vacancies } = useGetAllVacancies()

  const onPaginationChange = async (value: number): Promise<void> => {
    const paramsValue = (value - 1).toString()

    setPage(paramsValue)
    await replace(
      { pathname, query: { ...query, page: paramsValue === '0' ? [] : paramsValue } },
      undefined,
      {
        shallow: true,
      }
    )
  }

  const total = countTotalPages(
    (vacancies?.total ?? 1) > MAX_RESPONSE_ITEMS ? MAX_RESPONSE_ITEMS : vacancies?.total ?? 1,
    Number(pageCount) || DEFAULT_PAGE_COUNT
  )

  if (total <= DEFAULT_PAGE_COUNT) return null

  return (
    <div className="flex justify-center">
      <Pagination
        value={+(page ?? 0) + 1}
        size={width < TABLET_WIDTH ? 'sm' : 'md'}
        total={total}
        onChange={onPaginationChange}
      />
    </div>
  )
}
