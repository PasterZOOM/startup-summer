import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { selectAccessToken, useUserSettings } from '@/stores/useAuthStore'
import { selectParamsState, useParamsStore } from '@/stores/useParamsStore'
import { getQueryParamsFromParams } from '@/utils/getQueryParamsFromParams'

export const useApplyFilters = (): (() => void) => {
  const { refetch } = useGetAllVacancies()
  const { pathname, replace, query } = useRouter()
  const [params] = useParamsStore(selectParamsState)
  const accessToken = useUserSettings(selectAccessToken)

  const applyFilters = async (): Promise<void> => {
    const queryParams = getQueryParamsFromParams(params)

    await replace({ pathname, query: { ...queryParams, page: [] } }, undefined, {
      shallow: true,
    })
  }

  useEffect(() => {
    if (accessToken) {
      refetch().then()
    }
  }, [query, accessToken])

  return applyFilters
}
