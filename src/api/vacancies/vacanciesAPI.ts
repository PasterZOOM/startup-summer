import { instance } from '@/api/instance'
import { GetVacanciesParamsType, VacanciesResponseType } from '@/api/vacancies/types'

export const vacanciesAPI = {
  getVacancies: (params: GetVacanciesParamsType) =>
    instance
      .get<VacanciesResponseType>('/vacancies/', {
        params: { ...params, published: '1' },
      })
      .then(res => res.data),
}
