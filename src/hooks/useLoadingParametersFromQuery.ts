import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { selectParamsState, useParamsStore } from '@/stores/useParamsStore'

export const useLoadingParametersFromQuery = (): void => {
  const { query } = useRouter()
  const [, setParams] = useParamsStore(selectParamsState)

  useEffect(() => {
    setParams(query)
  }, [query])
}
