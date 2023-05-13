import { FC, memo, useState } from 'react'

import { Select } from '@mantine/core'
import { useTranslation } from 'next-i18next'

import { SelectArrayIcon } from '@/components/svg/selectArrayIcon'
import { MAX_WIDTH_FOR_FULL_TITLE, MIN_WIDTH_FOR_FULL_TITLE } from '@/constatnts/constants'
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
  const checkWidth = (): boolean => {
    return width < MIN_WIDTH_FOR_FULL_TITLE || width > MAX_WIDTH_FOR_FULL_TITLE
  }
  const chooseIndustryPlaceholder = t('chooseIndustryPlaceholder', 'Выберете отрасль')

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
      searchable
      onDropdownOpen={() => setIsOpen(true)}
      onDropdownClose={() => setIsOpen(false)}
      styles={{
        dropdown: { borderRadius: '8px' },
        input: { '&:hover:not(:disabled)': { border: '1px solid #5E96FC' } },
        rightSection: { pointerEvents: 'none', paddingRight: '12px' },
        item: {
          borderRadius: '8px',
          '&[data-hovered]': { background: '#DEECFF' },
          '&[data-selected], &[data-selected]:hover': { background: '#5E96FC' },
        },
      }}
      data={catalogs?.map(el => ({
        value: el.key.toString(),
        label: checkWidth() ? el.title_trimmed : el.title,
      }))}
      value={catalogues}
      onChange={value => setCatalogues(value ?? undefined)}
      disabled={!vacancies}
    />
  )
})
