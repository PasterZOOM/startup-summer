import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { selectParamsState, useParamsStore } from '@/stores/useParamsStore'

export const useLoadingParametersFromQuery = (): void => {
  const { query } = useRouter()
  const [params, setParams] = useParamsStore(selectParamsState)

  useEffect(() => {
    if (JSON.stringify(params) !== JSON.stringify(query)) {
      setParams(query)
    }
  }, [query])
}
