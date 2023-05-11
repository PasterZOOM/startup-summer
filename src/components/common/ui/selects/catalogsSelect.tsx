import { FC, memo } from 'react'

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
  )
})
