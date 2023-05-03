import { instance } from '@/api/instance'
import { GetVacanciesParamsType, VacanciesResponseType, VacancyType } from '@/api/vacancies/types'
import { DEFAULT_PAGE_COUNT } from '@/constatnts/constants'
import { REQUEST_PATHS } from '@/enums/paths'

export const vacanciesAPI = {
  getVacancies: (params?: GetVacanciesParamsType) => {
    const temp = { ...params }

    const checkPayment = (): boolean => {
      return !!temp.payment_from || !!temp.payment_to
    }

    if (checkPayment()) {
      temp.no_agreement = '1'
    }

    return instance
      .get<VacanciesResponseType>(REQUEST_PATHS.VACANCIES, {
        params: { published: '1', count: DEFAULT_PAGE_COUNT.toString(), ...temp },
      })
      .then(res => res.data)
  },
  getVacancy: (id: string) =>
    instance.get<VacancyType>(`${REQUEST_PATHS.VACANCIES}/${id}/`).then(res => res.data),
}
