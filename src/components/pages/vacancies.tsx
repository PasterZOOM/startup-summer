import { FC } from 'react'

import { useDisclosure } from '@mantine/hooks'
import { Inter } from 'next/font/google'

import { FiltersBlock } from '@/components/common/filters/filtersBlock'
import { MobileFiltersButtons } from '@/components/common/ui/buttons/mobilefiltersButtons'
import { SearchInput } from '@/components/common/ui/inputs/searchInput'
import { FiltersPagination } from '@/components/common/ui/pagination/filtersPagination'
import { MainContainer } from '@/components/common/ui/wrappers/mainContainer'
import { VacanciesBlock } from '@/components/common/vacancy/vacanciesBlock'
import { SubWrapper } from '@/components/common/wrappers/subWrapper'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'

const inter = Inter({ subsets: ['latin'] })

export const Vacancies: FC = () => {
  const [opened, { open, close }] = useDisclosure(false)

  const { data } = useGetAllVacancies()

  return (
    <>
      <div
        className={`${inter.className} flex justify-center p-2 pb-20.5 md:p-10 md:pb-32.5 lg:gap-7 lg:pb-10`}
      >
        <SubWrapper
          opened={opened}
          closeSidebar={close}
          bias={opened ? 'bottom-16 md:bottom-20' : '-bottom-full'}
        >
          <FiltersBlock />
        </SubWrapper>
        <MainContainer className="m-auto flex flex-col space-y-2 md:space-y-5 lg:m-0 lg:space-y-10 ">
          <div className="space-y-2 md:space-y-4">
            <SearchInput />
            <VacanciesBlock />
          </div>

          {data && <FiltersPagination />}
        </MainContainer>
      </div>
      <MobileFiltersButtons isOpen={opened} setOpen={open} setClose={close} />
    </>
  )
}
