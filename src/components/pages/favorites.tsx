import { FC, useEffect, useState } from 'react'

import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

import { MainPagination } from '@/components/common/pagination/mainPagination'
import { MainContainer } from '@/components/common/ui/wrappers/mainContainer'
import { VacancyCard } from '@/components/common/vacancy/vacancyCard'
import { DEFAULT_PAGE_COUNT } from '@/constatnts/constants'
import { selectVacancies, useFavoriteVacanciesStore } from '@/stores/useFavoritVacanciesStore'
import { countTotalPages } from '@/utils/countTotalPages'

const inter = Inter({ subsets: ['latin'] })

export const Favorites: FC = () => {
  const { push } = useRouter()
  const vacancies = useFavoriteVacanciesStore(selectVacancies)
  const [page, setPage] = useState(1)

  const { length } = Object.values(vacancies)

  useEffect(() => {
    if (!length) {
      push('404').then()
    } else if (page > Math.ceil(length / DEFAULT_PAGE_COUNT)) {
      setPage(prevState => prevState - 1)
    }
  }, [length])

  return (
    <div className="flex justify-center p-2 md:p-10">
      <MainContainer className={`${inter.className} space-y-2 md:space-y-5`}>
        {Object.values(vacancies)
          .slice(
            (page - 1) * DEFAULT_PAGE_COUNT,
            (page - 1) * DEFAULT_PAGE_COUNT + DEFAULT_PAGE_COUNT
          )
          .map(vacancy => (
            <VacancyCard key={vacancy.id} vacancy={vacancy} />
          ))}
        {length > DEFAULT_PAGE_COUNT && (
          <div className="flex w-full justify-center">
            <MainPagination
              page={page}
              total={countTotalPages(length, DEFAULT_PAGE_COUNT)}
              onChange={setPage}
            />
          </div>
        )}
      </MainContainer>
    </div>
  )
}
