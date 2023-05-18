import { useRouter } from 'next/router'

import { selectClearParams, selectParamsState, useParamsStore } from '@/stores/useParamsStore'

export const useClearParams = (): (() => void) => {
  const { pathname, replace, query } = useRouter()
  const clearParams = useParamsStore(selectClearParams)
  const [params] = useParamsStore(selectParamsState)

  return async (): Promise<void> => {
    const queryString = JSON.stringify(query)

    if (
      queryString !== '{}' &&
      (!/{"page":"[0-9]+"}/g.test(queryString) || !/{"keyword":"(.)+"}/g.test(queryString)) &&
      !/{"keyword":"[^"]*","page":"[0-9]+"}/.test(queryString)
    ) {
      await clearParams({ page: query.page as string, keyword: params.keyword })
      await replace(
        { pathname, query: { keyword: query.keyword ? query.keyword : [] } },
        undefined,
        { shallow: true }
      )
    } else {
      await clearParams({ page: query.page as string, keyword: params.keyword })
    }
  }
}
