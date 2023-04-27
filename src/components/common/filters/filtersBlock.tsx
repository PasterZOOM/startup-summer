import { FC } from 'react'

import { Button, Select } from '@mantine/core'

import { FilterWrapper } from '@/components/common/filters/filterWrapper'
import { ClearFiltersButton } from '@/components/common/ui/buttons/clearFiltersButton'
import { InputNumber } from '@/components/common/ui/inputs/inputNumber'
import { Paper } from '@/components/common/ui/wrappers/paper'
import { SelectArrayIcon } from '@/components/svg/selectArrayIcon'

export const FiltersBlock: FC = () => {
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
            rightSectionWidth={48}
            radius="md"
            size="md"
            styles={{ rightSection: { pointerEvents: 'none' } }}
            data={['React', 'Angular', 'Svelte', 'Vue']}
          />
        </FilterWrapper>

        <FilterWrapper title="Оклад">
          <InputNumber placeholder="От" />
          <InputNumber placeholder="До" />
        </FilterWrapper>

        <Button radius="md" size="md" className="w-full bg-blue-main-500">
          Применить
        </Button>
      </div>
    </Paper>
  )
}
