import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { ParamsKey } from '@/api/vacancies/types'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { selectParamsState, useParamsStore } from '@/stores/useParamsStore'

export const useApplyFilters = (): (() => void) => {
  const { refetch } = useGetAllVacancies()
  const { pathname, replace, query } = useRouter()
  const [params] = useParamsStore(selectParamsState)

  const applyFilters = async (): Promise<void> => {
    const queryParams: Partial<Record<ParamsKey, string | []>> = {}

    Object.entries(params).forEach(([key, value]) => {
      queryParams[key as keyof typeof queryParams] = !value || value === '0' ? [] : value
    })

    await replace({ pathname, query: { ...queryParams, page: [] } }, undefined, {
      shallow: true,
    })
  }

  useEffect(() => {
    refetch().then()
  }, [query])

  return applyFilters
}
