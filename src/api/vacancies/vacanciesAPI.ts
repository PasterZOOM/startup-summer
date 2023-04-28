import { instance } from '@/api/instance'
import { GetVacanciesParamsType, VacanciesResponseType, VacancyType } from '@/api/vacancies/types'

export const vacanciesAPI = {
  getVacancies: (params: GetVacanciesParamsType) => {
    const temp = { ...params }

    if (params.payment_from || params.payment_to) {
      temp.no_agreement = '1'
    }

    return instance
      .get<VacanciesResponseType>('/vacancies/', {
        params: { published: '1', count: '4', ...temp },
      })
      .then(res => res.data)
  },
  getVacancy: (id: string) => instance.get<VacancyType>(`/vacancies/${id}/`).then(res => res.data),
}
