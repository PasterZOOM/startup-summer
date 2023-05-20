import { FC, memo, useState } from 'react'

import { Select } from '@mantine/core'
import { useTranslation } from 'next-i18next'

import { SelectArrayIcon } from '@/components/svg/selectArrayIcon'
import { LAPTOP_WIDTH } from '@/constatnts/constants'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { useGetCatalogs } from '@/hooks/query/useGetCatalogs'
import { useWindowSize } from '@/hooks/useWindowSize'
import { selectCatalogues, useParamsStore } from '@/stores/useParamsStore'

export const CatalogsSelect: FC = memo(() => {
  const { t } = useTranslation('filters')
  const { width } = useWindowSize()

  const [isOpen, setIsOpen] = useState(false)

  const { data: catalogs = [] } = useGetCatalogs()
  const { data: vacancies } = useGetAllVacancies()

  const [catalogues = null, setCatalogues] = useParamsStore(selectCatalogues)

  const chooseIndustryPlaceholder = t('chooseIndustryPlaceholder')

  return (
    <Select
      data-elem="industry-select"
      placeholder={chooseIndustryPlaceholder}
      rightSection={
        <SelectArrayIcon
          className={`transition ${isOpen ? 'rotate-180 text-blue-main-500' : 'text-gray-500'}`}
        />
      }
      rightSectionWidth={36}
      radius="md"
      size="md"
      onDropdownOpen={() => setIsOpen(true)}
      onDropdownClose={() => setIsOpen(false)}
      styles={{
        dropdown: { borderRadius: '8px', zIndex: 30 },
        input: { '&:hover:not(:disabled)': { border: '1px solid #5E96FC' } },
        rightSection: { pointerEvents: 'none', paddingRight: '12px' },
        item: {
          whiteSpace: 'initial',
          borderRadius: '8px',
          '&[data-hovered]': { background: '#DEECFF' },
          '&[data-selected], &[data-selected]:hover': { background: '#5E96FC' },
        },
      }}
      data={catalogs?.map(el => ({
        value: el.key.toString(),
        label: el.title,
      }))}
      value={catalogues}
      onChange={value => setCatalogues(value ?? undefined)}
      disabled={!vacancies}
      dropdownPosition={width < LAPTOP_WIDTH ? 'top' : undefined}
    />
  )
})
