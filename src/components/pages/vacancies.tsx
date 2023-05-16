import { FC, useEffect, useState } from 'react'

import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

import { FiltersBlock } from '@/components/common/filters/filtersBlock'
import { MobileFiltersButtons } from '@/components/common/ui/buttons/mobilefiltersButtons'
import { CustomLoader } from '@/components/common/ui/customLoader'
import { SearchInput } from '@/components/common/ui/inputs/searchInput'
import { FiltersPagination } from '@/components/common/ui/pagination/filtersPagination'
import { MainContainer } from '@/components/common/ui/wrappers/mainContainer'
import { VacancyCard } from '@/components/common/vacancy/vacancyCard'
import { SidebarWrapper } from '@/components/common/wrappers/sidebarWrapper'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'

const inter = Inter({ subsets: ['latin'] })

export const Vacancies: FC = () => {
  const { push } = useRouter()

  const { data } = useGetAllVacancies()

  const [isOpenFilters, setIsOpenFilters] = useState(false)

  useEffect(() => {
    if (data && !data.objects.length) {
      push('404').then()
    }
  }, [data])

  return (
    <>
      <div
        className={`${inter.className} flex flex-col justify-center gap-2 px-2 pt-2 md:gap-4 md:px-10 md:pt-10 lg:flex-row lg:gap-7 lg:p-10`}
      >
        <SidebarWrapper isOpenFilters={isOpenFilters} setIsOpenFilters={setIsOpenFilters}>
          <FiltersBlock />
        </SidebarWrapper>
        <MainContainer className="m-auto mb-2 space-y-2 md:mb-5 md:space-y-5 lg:m-0 lg:space-y-10">
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
      {data && <MobileFiltersButtons isOpen={isOpenFilters} setOpen={setIsOpenFilters} />}
    </>
  )
}
