import { CatalogType } from '@/api/catalogs/types'
import { instance } from '@/api/instance'
import { REQUEST_PATHS } from '@/enums/paths'

export const catalogsApi = {
  getCatalogs: () => instance.get<CatalogType[]>(REQUEST_PATHS.CATALOGUES).then(res => res.data),
}
