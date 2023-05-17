import { FC, memo } from 'react'

import { useRouter } from 'next/router'

import { MainPagination } from '@/components/common/ui/pagination/mainPagination'
import { DEFAULT_PAGE_COUNT, MAX_RESPONSE_ITEMS } from '@/constatnts/constants'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { selectPage, selectPageCount, useParamsStore } from '@/stores/useParamsStore'
import { countTotalPages } from '@/utils/countTotalPages'

export const FiltersPagination: FC = memo(() => {
  const { query, replace, pathname } = useRouter()

  const [pageCount] = useParamsStore(selectPageCount)
  const [page, setPage] = useParamsStore(selectPage)

  const { data: vacancies } = useGetAllVacancies()

  const onPaginationChange = async (value: number): Promise<void> => {
    const paramsValue = value.toString()

    setPage(paramsValue)
    await replace(
      { pathname, query: { ...query, page: value <= 1 ? [] : paramsValue } },
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
    <div className="mx-auto w-fit pb-2 md:pb-5 lg:pb-10">
      <MainPagination page={+(page ?? 1)} total={total} onChange={onPaginationChange} />
    </div>
  )
})
