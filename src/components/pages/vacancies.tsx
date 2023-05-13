import { FC, useEffect } from 'react'

import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

import { FiltersBlock } from '@/components/common/filters/filtersBlock'
import { FiltersPagination } from '@/components/common/pagination/filtersPagination'
import { CustomLoader } from '@/components/common/ui/customLoader'
import { SearchInput } from '@/components/common/ui/inputs/searchInput'
import { MainContainer } from '@/components/common/ui/wrappers/mainContainer'
import { VacancyCard } from '@/components/common/vacancy/vacancyCard'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'

const inter = Inter({ subsets: ['latin'] })

export const Vacancies: FC = () => {
  const { push } = useRouter()

  const { data } = useGetAllVacancies()

  useEffect(() => {
    if (data && !data.objects.length) {
      push('404').then()
    }
  }, [data])

  return (
    <div
      className={`${inter.className} flex flex-col justify-center gap-2 p-2 md:gap-4 md:p-10 lg:flex-row lg:gap-7`}
    >
      <aside>
        <FiltersBlock />
      </aside>
      <MainContainer className="m-auto space-y-2 md:space-y-5 lg:m-0 lg:space-y-10">
        <div className="space-y-2 md:space-y-4">
          <SearchInput />
          {data ? (
            data.objects.map(vacancy => <VacancyCard key={vacancy.id} vacancy={vacancy} />)
          ) : (
            <CustomLoader />
          )}
        </div>

        {data && <FiltersPagination />}
      </MainContainer>
    </div>
  )
}
