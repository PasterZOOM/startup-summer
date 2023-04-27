import { instance } from '@/api/instance'
import { GetVacanciesParamsType, VacanciesResponseType } from '@/api/vacancies/types'

export const vacanciesAPI = {
  getVacancies: (params: GetVacanciesParamsType) =>
    instance
      .get<VacanciesResponseType>('/vacancies/', {
        params: { published: '1', count: '4', ...params },
      })
      .then(res => res.data),
}
