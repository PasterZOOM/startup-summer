export type VacancyType = {
  id: number
  profession: string
  firm_name: string
  town: { title: string }
  catalogues: { title: string }[]
  place_of_work: { title: string }
  payment_from: number
  payment_to: number
  currency: string
}
export type VacanciesResponseType = {
  objects: VacancyType[]
  total: number
}
export type ParamsKey = 'count' | 'page' | 'keyword' | 'payment_from' | 'payment_to' | 'catalogues'

export type GetVacanciesParamsType = Partial<Record<ParamsKey, string>>
