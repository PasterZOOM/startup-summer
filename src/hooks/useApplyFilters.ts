import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { selectIsInitialize, useUserSettings } from '@/stores/useAuthStore'
import { selectParamsState, useParamsStore } from '@/stores/useParamsStore'
import { getQueryParamsFromParams } from '@/utils/getQueryParamsFromParams'

export const useApplyFilters = (): (() => void) => {
  const { refetch } = useGetAllVacancies()
  const { pathname, replace, query } = useRouter()
  const [params] = useParamsStore(selectParamsState)
  const isInitialize = useUserSettings(selectIsInitialize)

  const applyFilters = async (): Promise<void> => {
    const queryParams = getQueryParamsFromParams(params)
    const paramsString = JSON.stringify(params)

    if (paramsString !== '{}') {
      await replace({ pathname, query: { ...queryParams, page: [] } }, undefined, {
        shallow: true,
      })
    }
  }

  useEffect(() => {
    if (isInitialize) {
      refetch().then()
    }
  }, [query, isInitialize])

  return applyFilters
}
