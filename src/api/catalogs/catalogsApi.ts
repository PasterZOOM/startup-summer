import { CatalogType } from '@/api/catalogs/types'
import { instance } from '@/api/instance'

export const catalogsApi = {
  getCatalogs: () => instance.get<CatalogType[]>('/catalogues').then(res => res.data),
}
