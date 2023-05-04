import { FC } from 'react'

import { Pagination } from '@mantine/core'
import { useRouter } from 'next/router'

import { DEFAULT_PAGE_COUNT, MAX_RESPONSE_ITEMS } from '@/constatnts/constants'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { selectPage, selectPageCount, useParamsStore } from '@/store/useParamsStore'
import { TABLET_WIDTH, useWindowSize } from '@/store/useWindowSize'

export const PaginationBlock: FC = () => {
  const { query, replace, pathname } = useRouter()
  const { width } = useWindowSize()

  const [pageCount] = useParamsStore(selectPageCount)
  const [page, setPage] = useParamsStore(selectPage)

  const { data: vacancies } = useGetAllVacancies()

  const onPaginationChange = async (value: number): Promise<void> => {
    const paramsValue = (value - 1).toString()

    setPage(paramsValue)
    await replace({ pathname, query: { ...query, page: paramsValue } }, undefined, {
      shallow: true,
    })
  }

  return (
    <div className="flex justify-center">
      <Pagination
        value={+(page ?? 0) + 1}
        size={width < TABLET_WIDTH ? 'sm' : 'md'}
        total={Math.ceil(
          (+(vacancies?.total ?? 1) > MAX_RESPONSE_ITEMS
            ? MAX_RESPONSE_ITEMS
            : +(vacancies?.total ?? 1)) / +(pageCount ?? DEFAULT_PAGE_COUNT)
        )}
        onChange={onPaginationChange}
      />
    </div>
  )
}
