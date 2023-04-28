import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { selectParamsState, useParamsStore } from '@/store/useParamsStore'

export const useLoadingParametersFromQuery = (): void => {
  const { query } = useRouter()
  const [params, setParams] = useParamsStore(selectParamsState)
  const { refetch } = useGetAllVacancies()

  useEffect(() => {
    if (JSON.stringify(params) !== JSON.stringify(query)) {
      setParams(query)
      refetch().then()
    }
  }, [query])
}
