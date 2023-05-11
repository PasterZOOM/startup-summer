import { ChangeEventHandler, FC, KeyboardEventHandler } from 'react'

import { Button, Input } from '@mantine/core'
import { useTranslation } from 'next-i18next'

import { SearchIcon } from '@/components/svg/searchIcon'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { useApplyFilters } from '@/hooks/useApplyFilters'
import { selectKeywordState, useParamsStore } from '@/stores/useParamsStore'

export const SearchInput: FC = () => {
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

  const searchButtonTitle = t('searchButtonTitle', 'Поиск')
  const searchPlaceholder = t('searchPlaceholder', 'Введите название вакансии')

  return (
    <Input
      data-elem="search-input"
      icon={<SearchIcon />}
      radius="md"
      styles={{ input: { height: '48px' } }}
      placeholder={searchPlaceholder}
      rightSection={
        <Button
          data-elem="search-button"
          radius="md"
          className="bg-blue-main-500"
          onClick={applyFilters}
          disabled={!vacancies}
        >
          {searchButtonTitle}
        </Button>
      }
      rightSectionWidth={95}
      value={keyword}
      onChange={onChangeInputValue}
      onKeyDown={onKeyDownEnter}
      disabled={!vacancies}
    />
  )
}
