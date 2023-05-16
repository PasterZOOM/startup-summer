import { memo } from 'react'

import { useTranslation } from 'next-i18next'

import { FilterWrapper } from '@/components/common/filters/filterWrapper'
import { InputsBlock } from '@/components/common/filters/inputsBlock'
import { ClearFiltersButton } from '@/components/common/ui/buttons/clearFiltersButton'
import { MainButton } from '@/components/common/ui/buttons/mainButton'
import { CatalogsSelect } from '@/components/common/ui/selects/catalogsSelect'
import { Paper } from '@/components/common/ui/wrappers/paper'
import { MAX_WIDTH_FOR_FULL_TITLE } from '@/constatnts/constants'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { useApplyFilters } from '@/hooks/useApplyFilters'
import { useLoadingParametersFromQuery } from '@/hooks/useLoadingParametersFromQuery'
import { useWindowSize } from '@/hooks/useWindowSize'

export const FiltersBlock = memo(() => {
  useLoadingParametersFromQuery()
  const { width } = useWindowSize()

  const { t } = useTranslation('filters')
  const applyFilters = useApplyFilters()

  const { data: vacancies } = useGetAllVacancies()

  const filtersTitle = t('filtersTitle')
  const industryTitle = t('industryTitle')
  const salaryTitle = t('salaryTitle')

  const applyButtonTitle = t('applyButtonTitle')

  return (
    <Paper className="m-auto select-none space-y-8 p-4 lg:w-78.75">
      {width > MAX_WIDTH_FOR_FULL_TITLE && (
        <div className="flex items-center justify-between">
          <span className="text-title-s font-bold">{filtersTitle}</span>
          <ClearFiltersButton />
        </div>
      )}

      <div className="space-y-4">
        <FilterWrapper title={industryTitle}>
          <CatalogsSelect />
        </FilterWrapper>

        <FilterWrapper title={salaryTitle}>
          <InputsBlock />
        </FilterWrapper>

        <MainButton
          size="md"
          className="hidden w-full lg:block"
          onClick={applyFilters}
          disabled={!vacancies}
        >
          {applyButtonTitle}
        </MainButton>
      </div>
    </Paper>
  )
})
