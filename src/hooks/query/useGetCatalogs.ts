import { useQuery } from 'react-query'

import { AuthErrorType } from '@/api/auth/types'
import { catalogsApi } from '@/api/catalogs/catalogsApi'
import { CatalogType } from '@/api/catalogs/types'
import { QUERY_KEY } from '@/enums/queryKeys'
import { useAuthError } from '@/hooks/query/useAuthError'
import { UseQueryHook } from '@/types/useQueryType'

export const useGetCatalogs: UseQueryHook<CatalogType[], AuthErrorType> = options => {
  const handleAuthError = useAuthError()

  return useQuery({
    queryKey: [QUERY_KEY.GET_CATALOGS],
    queryFn: catalogsApi.getCatalogs,
    enabled: false,
    onError: data => {
      handleAuthError(data)
    },
    ...options,
  })
}
