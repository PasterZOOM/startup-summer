import { FC } from 'react'

import { Button } from '@mantine/core'
import { useTranslation } from 'next-i18next'

import { FilterWrapper } from '@/components/common/filters/filterWrapper'
import { InputsBlock } from '@/components/common/filters/inputsBlock'
import { ClearFiltersButton } from '@/components/common/ui/buttons/clearFiltersButton'
import { CatalogsSelect } from '@/components/common/ui/selects/catalogsSelect'
import { Paper } from '@/components/common/ui/wrappers/paper'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { useApplyFilters } from '@/hooks/useApplyFilters'
import { useLoadingParametersFromQuery } from '@/hooks/useLoadingParametersFromQuery'

export const FiltersBlock: FC = () => {
  useLoadingParametersFromQuery()

  const { t } = useTranslation('filters')
  const applyFilters = useApplyFilters()

  const { data: vacancies } = useGetAllVacancies()

  const filtersTitle = t('filtersTitle', 'Фильтры')
  const industryTitle = t('industryTitle', 'Отрасль')
  const salaryTitle = t('salaryTitle', 'Оклад')

  const applyButtonTitle = t('applyButtonTitle', 'Принять')

  return (
    <Paper className="m-auto max-w-193.25 space-y-8 p-4 lg:w-78.75">
      <div className="flex items-center justify-between">
        <span className="text-title-s font-bold">{filtersTitle}</span>
        <ClearFiltersButton />
      </div>

      <div className="space-y-4">
        <FilterWrapper title={industryTitle}>
          <CatalogsSelect />
        </FilterWrapper>

        <FilterWrapper title={salaryTitle}>
          <InputsBlock />
        </FilterWrapper>

        <Button
          data-elem="search-button"
          radius="md"
          size="md"
          className="w-full bg-blue-main-500"
          onClick={applyFilters}
          disabled={!vacancies}
        >
          {applyButtonTitle}
        </Button>
      </div>
    </Paper>
  )
}
