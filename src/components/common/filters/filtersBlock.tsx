import { FC } from 'react'

import { Button, Select } from '@mantine/core'

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
  const applyFilters = useApplyFilters()
  const { width } = useWindowSize()

  const { data: catalogs = [] } = useGetCatalogs()
  const { isFetching } = useGetAllVacancies()

  const [catalogues = null, setCatalogues] = useParamsStore(selectCatalogues)
  const [paymentFrom, setPaymentFrom] = useParamsStore(selectPaymentFrom)
  const [paymentTo, setPaymentTo] = useParamsStore(selectPaymentTo)

  const checkWidth = (): boolean => {
    return width < MIN_WIDTH_FOR_FULL_TITLE || width > MAX_WIDTH_FOR_FULL_TITLE
  }

  return (
    <Paper className="m-auto max-w-193.25 space-y-8 p-4 lg:w-78.75">
      <div className="flex items-center justify-between">
        <span className="text-title-s font-bold">Фильтры</span>
        <ClearFiltersButton />
      </div>

      <div className="space-y-4">
        <FilterWrapper title="Отрасль">
          <Select
            data-elem="industry-select"
            placeholder="Выберете отрасль"
            rightSection={<SelectArrayIcon />}
            rightSectionWidth={36}
            radius="md"
            size="md"
            searchable
            styles={{
              rightSection: { pointerEvents: 'none', paddingRight: '12px' },
              item: { padding: '5px 0 5px 5px' },
            }}
            data={catalogs?.map(el => ({
              value: el.key.toString(),
              label: checkWidth() ? el.title_trimmed : el.title,
            }))}
            value={catalogues}
            onChange={value => setCatalogues(value ?? undefined)}
            disabled={isFetching}
          />
        </FilterWrapper>

        <FilterWrapper title="Оклад">
          <InputNumber
            data-elem="salary-from-input"
            placeholder="От"
            value={Number(paymentFrom) || ''}
            onChange={value => setPaymentFrom(value.toString())}
            max={Number(paymentTo) || undefined}
            min={0}
            disabled={isFetching}
          />
          <InputNumber
            data-elem="salary-to-input"
            placeholder="До"
            value={Number(paymentTo) || ''}
            onChange={value => setPaymentTo(value.toString())}
            min={paymentFrom ? Number(paymentFrom) : undefined}
            disabled={isFetching}
          />
        </FilterWrapper>

        <Button
          data-elem="search-button"
          radius="md"
          size="md"
          className="w-full bg-blue-main-500"
          onClick={applyFilters}
          disabled={isFetching}
        >
          Применить
        </Button>
      </div>
    </Paper>
  )
}
