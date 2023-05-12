import { GetVacanciesParamsType, ParamsKey } from '@/api/vacancies/types'

export const getQueryParamsFromParams = (params: GetVacanciesParamsType): QueryParamsObjectType => {
  const queryParams: QueryParamsObjectType = {}

  Object.entries(params).forEach(([key, value]) => {
    queryParams[key as keyof typeof queryParams] = !value || value === '0' ? [] : value
  })

  return queryParams
}

type QueryParamsObjectType = Partial<Record<ParamsKey, string | []>>
