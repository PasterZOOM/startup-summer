import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { ParamsKey } from '@/api/vacancies/types'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { selectPage, selectParamsState, useParamsStore } from '@/store/useParamsStore'

export const useApplyFilters = (): (() => void) => {
  const { refetch } = useGetAllVacancies()
  const { pathname, replace, query } = useRouter()
  const [params] = useParamsStore(selectParamsState)
  const [page, setPage] = useParamsStore(selectPage)

  const applyFilters = async (): Promise<void> => {
    const queryParams: Partial<Record<ParamsKey, string | []>> = {}

    Object.entries(params).forEach(([key, value]) => {
      queryParams[key as keyof typeof queryParams] = value || []
    })

    await replace({ pathname, query: queryParams }, undefined, {
      shallow: true,
    })

    if (page === '1') {
      await refetch()
    } else {
      setPage('1')
    }
  }

  useEffect(() => {
    refetch().then()
  }, [query])

  return applyFilters
}
