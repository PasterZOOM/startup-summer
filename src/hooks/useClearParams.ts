import { useRouter } from 'next/router'

import { selectClearParams, useParamsStore } from '@/stores/useParamsStore'

export const useClearParams = (): (() => void) => {
  const { pathname, replace } = useRouter()
  const clearParams = useParamsStore(selectClearParams)

  return async (): Promise<void> => {
    await clearParams()
    await replace({ pathname }, undefined, { shallow: true })
  }
}
