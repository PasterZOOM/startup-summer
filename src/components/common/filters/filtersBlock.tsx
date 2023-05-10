import { FC } from 'react'

import { Button, Select } from '@mantine/core'
import { useTranslation } from 'next-i18next'

import { FilterWrapper } from '@/components/common/filters/filterWrapper'
import { ClearFiltersButton } from '@/components/common/ui/buttons/clearFiltersButton'
import { InputNumber } from '@/components/common/ui/inputs/inputNumber'
import { Paper } from '@/components/common/ui/wrappers/paper'
import { SelectArrayIcon } from '@/components/svg/selectArrayIcon'
import { MAX_WIDTH_FOR_FULL_TITLE, MIN_WIDTH_FOR_FULL_TITLE } from '@/constatnts/constants'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { useGetCatalogs } from '@/hooks/query/useGetCatalogs'
import { useApplyFilters } from '@/hooks/useApplyFilters'
import {
  selectCatalogues,
  selectPaymentFrom,
  selectPaymentTo,
  useParamsStore,
} from '@/store/useParamsStore'
import { useWindowSize } from '@/store/useWindowSize'

export const FiltersBlock: FC = () => {
  const { t } = useTranslation('filters')
  const applyFilters = useApplyFilters()
  const { width } = useWindowSize()

  const { data: catalogs = [] } = useGetCatalogs()
  const { data: vacancies } = useGetAllVacancies()

  const [catalogues = null, setCatalogues] = useParamsStore(selectCatalogues)
  const [paymentFrom, setPaymentFrom] = useParamsStore(selectPaymentFrom)
  const [paymentTo, setPaymentTo] = useParamsStore(selectPaymentTo)

  const checkWidth = (): boolean => {
    return width < MIN_WIDTH_FOR_FULL_TITLE || width > MAX_WIDTH_FOR_FULL_TITLE
  }

  const filtersTitle = t('filtersTitle', 'Фильтры')
  const industryTitle = t('industryTitle', 'Отрасль')
  const chooseIndustryPlaceholder = t('chooseIndustryPlaceholder', 'Выберете отрасль')
  const salaryTitle = t('salaryTitle', 'Оклад')
  const fromPlaceholder = t('fromPlaceholder', 'До')
  const toPlaceholder = t('toPlaceholder', 'От')
  const applyButtonTitle = t('applyButtonTitle', 'Принять')

  return (
    <Paper className="m-auto max-w-193.25 space-y-8 p-4 lg:w-78.75">
      <div className="flex items-center justify-between">
        <span className="text-title-s font-bold">{filtersTitle}</span>
        <ClearFiltersButton />
      </div>

      <div className="space-y-4">
        <FilterWrapper title={industryTitle}>
          <Select
            data-elem="industry-select"
            placeholder={chooseIndustryPlaceholder}
            rightSection={<SelectArrayIcon />}
            rightSectionWidth={36}
            radius="md"
            size="md"
            searchable
            styles={{
              rightSection: { pointerEvents: 'none', paddingRight: '12px' },
            }}
            data={catalogs?.map(el => ({
              value: el.key.toString(),
              label: checkWidth() ? el.title_trimmed : el.title,
            }))}
            value={catalogues}
            onChange={value => setCatalogues(value ?? undefined)}
            disabled={!vacancies}
          />
        </FilterWrapper>

        <FilterWrapper title={salaryTitle}>
          <InputNumber
            data-elem="salary-from-input"
            placeholder={fromPlaceholder}
            value={Number(paymentFrom) || ''}
            onChange={value => setPaymentFrom(value.toString())}
            max={Number(paymentTo) || undefined}
            min={0}
            disabled={!vacancies}
            step={500}
          />
          <InputNumber
            data-elem="salary-to-input"
            placeholder={toPlaceholder}
            value={Number(paymentTo) || ''}
            onChange={value => setPaymentTo(value.toString())}
            min={paymentFrom ? Number(paymentFrom) : undefined}
            disabled={!vacancies}
            step={500}
          />
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
