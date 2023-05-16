import { ChangeEventHandler, FC, KeyboardEventHandler, memo } from 'react'

import { Input } from '@mantine/core'
import { useTranslation } from 'next-i18next'

import { MainButton } from '@/components/common/ui/buttons/mainButton'
import { SearchIcon } from '@/components/svg/searchIcon'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { useApplyFilters } from '@/hooks/useApplyFilters'
import { selectKeywordState, useParamsStore } from '@/stores/useParamsStore'

export const SearchInput: FC = memo(() => {
  const { t } = useTranslation('filters')

  const [keyword = '', setKeyword] = useParamsStore(selectKeywordState)
  const applyFilters = useApplyFilters()
  const { data: vacancies } = useGetAllVacancies()

  const onKeyDownEnter: KeyboardEventHandler = async e => {
    if (e.key === 'Enter') {
      await applyFilters()
    }
  }
  const onChangeInputValue: ChangeEventHandler<HTMLInputElement> = e => {
    setKeyword(e.currentTarget.value)
  }

  const searchButtonTitle = t('searchButtonTitle')
  const searchPlaceholder = t('searchPlaceholder')

  return (
    <Input
      data-elem="search-input"
      icon={<SearchIcon />}
      radius="md"
      placeholder={searchPlaceholder}
      rightSection={
        <MainButton onClick={applyFilters} disabled={!vacancies}>
          {searchButtonTitle}
        </MainButton>
      }
      rightSectionWidth={95}
      value={keyword}
      onChange={onChangeInputValue}
      onKeyDown={onKeyDownEnter}
      disabled={!vacancies}
      sx={{
        input: { height: '48px' },
        '&:hover': { 'input:not(:disabled)': { border: '1px solid #5E96FC' } },
      }}
    />
  )
})
