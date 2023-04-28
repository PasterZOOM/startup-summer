import { useEffect, useState } from 'react'

import { Pagination } from '@mantine/core'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MainContainer } from '@/components/common/ui/wrappers/mainContainer'
import { VacancyCard } from '@/components/common/vacancy/vacancyCard'
import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'
import { selectVacancies, useFavoriteVacanciesStore } from '@/store/useFavoritVacanciesStore'
import { TABLET_WIDTH, useWindowSize } from '@/store/useWindowSize'

const inter = Inter({ subsets: ['latin'] })

const PAGE_COUNT = 4

const Favorites: NextPageWithLayout = () => {
  const { push } = useRouter()
  const { width } = useWindowSize()
  const vacancies = useFavoriteVacanciesStore(selectVacancies)
  const [page, setPage] = useState(0)

  const { length } = Object.values(vacancies)

  useEffect(() => {
    if (!length) {
      push('404').then()
    } else if (page + 1 > Math.ceil(length / PAGE_COUNT)) {
      setPage(prevState => prevState - 1)
    }
  }, [length])

  return (
    <div className="flex justify-center p-2 md:p-10">
      <MainContainer className={`${inter.className} space-y-2 md:space-y-5`}>
        {Object.values(vacancies)
          .slice(page * PAGE_COUNT, page * PAGE_COUNT + PAGE_COUNT)
          .map(vacancy => (
            <Link
              key={vacancy.id}
              href={`/vacancies/${vacancy.id}`}
              className="block rounded-xl focus:outline-offset-4 focus:outline-blue-main-500"
            >
              <VacancyCard vacancy={vacancy} />
            </Link>
          ))}
        {length > PAGE_COUNT && (
          <div className="flex w-full justify-center">
            <Pagination
              value={page + 1}
              size={width < TABLET_WIDTH ? 'sm' : 'md'}
              total={Math.ceil(length / PAGE_COUNT)}
              onChange={value => setPage(value - 1)}
            />
          </div>
        )}
      </MainContainer>
    </div>
  )
}

Favorites.getLayout = MainLayout
export default Favorites
