import { AxiosHeaders, RawAxiosRequestHeaders } from 'axios'

import { AuthResponseType } from '@/api/auth/types'
import { instance } from '@/api/instance'
import { GetVacanciesParamsType, VacanciesResponseType, VacancyType } from '@/api/vacancies/types'
import { DEFAULT_PAGE_COUNT } from '@/constatnts/constants'
import { REQUEST_PATHS } from '@/enums/paths'

export const vacanciesAPI = {
  getVacancies: (params?: GetVacanciesParamsType) => {
    let temp: GetVacanciesParamsType = { ...params }

    const checkPayment = (): boolean => {
      return !!temp.payment_from || !!temp.payment_to
    }

    if (checkPayment()) {
      temp = { ...temp, no_agreement: '1' }
    }

    if (temp.page) {
      temp = { ...temp, page: (+temp.page - 1).toString() }
    }
    const headers: RawAxiosRequestHeaders | AxiosHeaders = {}

    if (typeof window !== 'undefined') {
      const authData = localStorage.getItem('auth')

      if (authData) {
        const { access_token: accessToken, token_type: tokenType }: AuthResponseType =
          JSON.parse(authData).state

        headers.Authorization = `${tokenType} ${accessToken}`
      }
    }

    return instance
      .get<VacanciesResponseType>(REQUEST_PATHS.VACANCIES, {
        headers,
        params: { published: '1', count: DEFAULT_PAGE_COUNT.toString(), ...temp },
      })
      .then(res => res.data)
  },
  getVacancy: (id: string) =>
    instance.get<VacancyType>(`${REQUEST_PATHS.VACANCIES}${id}/`).then(res => res.data),
}
