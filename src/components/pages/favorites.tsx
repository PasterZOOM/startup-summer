import { FC, useEffect, useState } from 'react'

import { Pagination } from '@mantine/core'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

import { MainContainer } from '@/components/common/ui/wrappers/mainContainer'
import { VacancyCard } from '@/components/common/vacancy/vacancyCard'
import { DEFAULT_PAGE_COUNT } from '@/constatnts/constants'
import { TABLET_WIDTH, useWindowSize } from '@/hooks/useWindowSize'
import { selectVacancies, useFavoriteVacanciesStore } from '@/stores/useFavoritVacanciesStore'
import { countTotalPages } from '@/utils/countTotalPages'

const inter = Inter({ subsets: ['latin'] })

export const Favorites: FC = () => {
  const { push } = useRouter()
  const { width } = useWindowSize()
  const vacancies = useFavoriteVacanciesStore(selectVacancies)
  const [page, setPage] = useState(0)

  const { length } = Object.values(vacancies)

  useEffect(() => {
    if (!length) {
      push('404').then()
    } else if (page + 1 > Math.ceil(length / DEFAULT_PAGE_COUNT)) {
      setPage(prevState => prevState - 1)
    }
  }, [length])

  return (
    <div className="flex justify-center p-2 md:p-10">
      <MainContainer className={`${inter.className} space-y-2 md:space-y-5`}>
        {Object.values(vacancies)
          .slice(page * DEFAULT_PAGE_COUNT, page * DEFAULT_PAGE_COUNT + DEFAULT_PAGE_COUNT)
          .map(vacancy => (
            <VacancyCard key={vacancy.id} vacancy={vacancy} />
          ))}
        {length > DEFAULT_PAGE_COUNT && (
          <div className="flex w-full justify-center">
            <Pagination
              value={page + 1}
              size={width < TABLET_WIDTH ? 'sm' : 'md'}
              total={countTotalPages(length, DEFAULT_PAGE_COUNT)}
              onChange={value => setPage(value - 1)}
            />
          </div>
        )}
      </MainContainer>
    </div>
  )
}
