import { useEffect, useRef } from 'react'

import { useRouter } from 'next/router'

import { ParamsKey } from '@/api/vacancies/types'
import { selectParamsState, useParamsStore } from '@/store/useParamsStore'

export const useChangeParams = (): void => {
  const { pathname, replace, query } = useRouter()
  const [params, setParams] = useParamsStore(selectParamsState)
  const firstUpdate = useRef(true)

  useEffect(() => {
    if (JSON.stringify(params) !== JSON.stringify(query)) {
      setParams({ ...query })
    }
  }, [query])

  useEffect(() => {
    if (!firstUpdate.current) {
      const queryParams: Partial<Record<ParamsKey, string | []>> = {}

      Object.entries(params).forEach(([key, value]) => {
        queryParams[key as keyof typeof queryParams] = value || []
      })

      replace({ pathname, query: queryParams }, undefined, {
        shallow: true,
      }).then()
    } else {
      firstUpdate.current = false
    }
  }, [params])
}
