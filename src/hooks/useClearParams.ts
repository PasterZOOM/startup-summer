import { useRouter } from 'next/router'

import { selectClearParams, useParamsStore } from '@/stores/useParamsStore'

export const useClearParams = (): (() => void) => {
  const { pathname, replace, query } = useRouter()
  const clearParams = useParamsStore(selectClearParams)

  return async (): Promise<void> => {
    const queryString = JSON.stringify(query)

    if (
      queryString !== '{}' &&
      (!/{"page":"[0-9]+"}/g.test(queryString) || !/{"keyword":"(.)+"}/g.test(queryString)) &&
      !/{"keyword":"[^"]*","page":"[0-9]+"}/.test(queryString)
    ) {
      await clearParams(query.page as string)
      await replace(
        { pathname, query: { keyword: query.keyword ? query.keyword : [] } },
        undefined,
        { shallow: true }
      )
    } else {
      await clearParams(query.page as string)
    }
  }
}
