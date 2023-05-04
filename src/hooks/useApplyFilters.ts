import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { ParamsKey } from '@/api/vacancies/types'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { useIsFirstRender } from '@/hooks/useIsFirstRender'
import { selectParamsState, useParamsStore } from '@/store/useParamsStore'

export const useApplyFilters = (): (() => void) => {
  const isFirstRender = useIsFirstRender()
  const { refetch } = useGetAllVacancies()
  const { pathname, replace, query } = useRouter()
  const [params] = useParamsStore(selectParamsState)

  const applyFilters = async (): Promise<void> => {
    const queryParams: Partial<Record<ParamsKey, string | []>> = {}

    Object.entries(params).forEach(([key, value]) => {
      queryParams[key as keyof typeof queryParams] = value || []
    })

    await replace({ pathname, query: { ...queryParams, page: '0' } }, undefined, {
      shallow: true,
    })
  }

  useEffect(() => {
    if (!isFirstRender) {
      refetch().then()
    }
  }, [query])

  return applyFilters
}
