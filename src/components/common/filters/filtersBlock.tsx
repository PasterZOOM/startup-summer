import { FC } from 'react'

import { Button, Select } from '@mantine/core'

import { FilterWrapper } from '@/components/common/filters/filterWrapper'
import { ClearFiltersButton } from '@/components/common/ui/buttons/clearFiltersButton'
import { InputNumber } from '@/components/common/ui/inputs/inputNumber'
import { Paper } from '@/components/common/ui/wrappers/paper'
import { SelectArrayIcon } from '@/components/svg/selectArrayIcon'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { useGetCatalogs } from '@/hooks/query/useGetCatalogs'
import {
  selectCatalogues,
  selectPaymentFrom,
  selectPaymentTo,
  useParamsStore,
} from '@/store/useParamsStore'

export const FiltersBlock: FC = () => {
  const { refetch } = useGetAllVacancies()
  const { data: catalogs } = useGetCatalogs()

  const [catalogues, setCatalogues] = useParamsStore(selectCatalogues)
  const [paymentFrom, setPaymentFrom] = useParamsStore(selectPaymentFrom)
  const [paymentTo, setPaymentTo] = useParamsStore(selectPaymentTo)

  return (
    <Paper className="max-w-78.75 space-y-8 p-4">
      <div className="flex items-center justify-between">
        <span className="text-title-s font-bold">Фильтры</span>
        <ClearFiltersButton />
      </div>

      <div className="space-y-4">
        <FilterWrapper title="Отрасль">
          <Select
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
            data={
              catalogs?.map(el => ({ value: el.key.toString(), label: el.title_trimmed })) ?? []
            }
            value={catalogues}
            onChange={value => setCatalogues(value ?? undefined)}
          />
        </FilterWrapper>

        <FilterWrapper title="Оклад">
          <InputNumber
            placeholder="От"
            value={Number(paymentFrom) || ''}
            onChange={value => setPaymentFrom(value.toString())}
          />
          <InputNumber
            placeholder="До"
            value={Number(paymentTo) || ''}
            onChange={value => setPaymentTo(value.toString())}
          />
        </FilterWrapper>

        <Button radius="md" size="md" className="w-full bg-blue-main-500" onClick={() => refetch()}>
          Применить
        </Button>
      </div>
    </Paper>
  )
}
