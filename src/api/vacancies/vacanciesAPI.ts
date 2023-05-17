import { instanceWithAuth } from '@/api/instance'
import { GetVacanciesParamsType, VacanciesResponseType, VacancyType } from '@/api/vacancies/types'
import { DEFAULT_PAGE_COUNT } from '@/constatnts/constants'
import { REQUEST_PATHS } from '@/enums/paths'

export const vacanciesAPI = {
  getVacancies: (params?: GetVacanciesParamsType) => {
    let temp: GetVacanciesParamsType = { ...params }

    if (!!temp.payment_from || !!temp.payment_to) {
      temp = { ...temp, no_agreement: '1' }
    }

    if (temp.page) {
      const page = (+temp.page - 1).toString()

      temp = { ...temp, page }
    }

    return instanceWithAuth
      .get<VacanciesResponseType>(REQUEST_PATHS.VACANCIES, {
        params: { published: '1', count: DEFAULT_PAGE_COUNT.toString(), ...temp },
      })
      .then(res => res.data)
  },
  getVacancy: (id: string) =>
    instanceWithAuth.get<VacancyType>(`${REQUEST_PATHS.VACANCIES}${id}/`).then(res => res.data),
}
