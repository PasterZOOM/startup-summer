import { useQuery } from 'react-query'

import { catalogsApi } from '@/api/catalogs/catalogsApi'
import { CatalogType } from '@/api/catalogs/types'
import { QUERY_KEY } from '@/enums/queryKeys'
import { UseQueryHook } from '@/types/useQueryType'

export const useGetCatalogs: UseQueryHook<CatalogType[]> = options => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_CATALOGS],
    queryFn: catalogsApi.getCatalogs,
    enabled: false,
    ...options,
  })
}
