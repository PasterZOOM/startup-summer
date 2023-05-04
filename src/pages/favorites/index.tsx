import { useEffect, useState } from 'react'

import { Pagination } from '@mantine/core'
import { GetStaticProps } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { MainContainer } from '@/components/common/ui/wrappers/mainContainer'
import { VacancyCard } from '@/components/common/vacancy/vacancyCard'
import { DEFAULT_LOCALE, DEFAULT_PAGE_COUNT } from '@/constatnts/constants'
import { ROUT_PATHS } from '@/enums/paths'
import { MainLayout } from '@/layouts/mainLayout'
import { NextPageWithLayout } from '@/pages/_app'
import { selectVacancies, useFavoriteVacanciesStore } from '@/store/useFavoritVacanciesStore'
import { TABLET_WIDTH, useWindowSize } from '@/store/useWindowSize'

const inter = Inter({ subsets: ['latin'] })

const Favorites: NextPageWithLayout = () => {
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
            <Link
              key={vacancy.id}
              href={`${ROUT_PATHS.VACANCIES}/${vacancy.id}`}
              className="block rounded-xl focus:outline-offset-4 focus:outline-blue-main-500"
            >
              <VacancyCard vacancy={vacancy} />
            </Link>
          ))}
        {length > DEFAULT_PAGE_COUNT && (
          <div className="flex w-full justify-center">
            <Pagination
              value={page + 1}
              size={width < TABLET_WIDTH ? 'sm' : 'md'}
              total={Math.ceil(length / DEFAULT_PAGE_COUNT)}
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

export const getStaticProps: GetStaticProps = async ({ locale = DEFAULT_LOCALE }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
