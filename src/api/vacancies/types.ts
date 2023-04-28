export type VacancyType = {
  id: number
  profession: string
  firm_name: string
  town: { title: string }
  catalogues: { title: string }[]
  type_of_work: { title: string }
  payment_from: number
  payment_to: number
  currency: string
  vacancyRichText: string
}
export type VacanciesResponseType = {
  objects: VacancyType[]
  total: number
}
export type ParamsKey =
  | 'count'
  | 'page'
  | 'keyword'
  | 'payment_from'
  | 'payment_to'
  | 'catalogues'
  | 'no_agreement'

export type GetVacanciesParamsType = Partial<Record<ParamsKey, string>>
