import { ChangeEventHandler, FC, KeyboardEventHandler } from 'react'

import { Button, Input } from '@mantine/core'

import { SearchIcon } from '@/components/svg/searchIcon'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { useApplyFilters } from '@/hooks/useApplyFilters'
import { selectKeywordState, useParamsStore } from '@/store/useParamsStore'

export const SearchInput: FC = () => {
  const [keyword = '', setKeyword] = useParamsStore(selectKeywordState)
  const applyFilters = useApplyFilters()
  const { isFetching } = useGetAllVacancies()

  const onKeyDownEnter: KeyboardEventHandler = async e => {
    if (e.key === 'Enter') {
      await applyFilters()
    }
  }
  const onChangeInputValue: ChangeEventHandler<HTMLInputElement> = e => {
    setKeyword(e.currentTarget.value)
  }

  return (
    <Input
      data-elem="search-input"
      icon={<SearchIcon />}
      radius="md"
      styles={{ input: { height: '48px' } }}
      placeholder="Введите название вакансии"
      rightSection={
        <Button
          data-elem="search-button"
          radius="md"
          className="bg-blue-main-500"
          onClick={applyFilters}
          disabled={isFetching}
        >
          Поиск
        </Button>
      }
      rightSectionWidth={95}
      value={keyword}
      onChange={onChangeInputValue}
      onKeyDown={onKeyDownEnter}
      disabled={isFetching}
    />
  )
}
