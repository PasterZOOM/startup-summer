import { QueryKey, UseQueryOptions, UseQueryResult } from 'react-query'

import { QUERY_KEY } from '@/enums/queryKeys'

export type UseQueryHook<
  TQueryFnData = unknown,
  TError = unknown,
  TQueryKey extends QueryKey = QUERY_KEY[],
  TData = TQueryFnData
> = (
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn' | 'onSuccess' | 'onError'
  >
) => UseQueryResult<TData, TError>
