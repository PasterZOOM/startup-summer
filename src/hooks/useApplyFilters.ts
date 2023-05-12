import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { selectParamsState, useParamsStore } from '@/stores/useParamsStore'
import { getQueryParamsFromParams } from '@/utils/getQueryParamsFromParams'

export const useApplyFilters = (): (() => void) => {
  const { refetch } = useGetAllVacancies()
  const { pathname, replace, query } = useRouter()
  const [params] = useParamsStore(selectParamsState)

  const applyFilters = async (): Promise<void> => {
    const queryParams = getQueryParamsFromParams(params)

    await replace({ pathname, query: { ...queryParams, page: [] } }, undefined, {
      shallow: true,
    })
  }

  useEffect(() => {
    refetch().then()
  }, [query])

  return applyFilters
}
