import { ChangeEventHandler, FC, KeyboardEventHandler, memo } from 'react'

import { CloseButton, Input } from '@mantine/core'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { MainButton } from '@/components/common/ui/buttons/mainButton'
import { SearchIcon } from '@/components/svg/searchIcon'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { useApplyFilters } from '@/hooks/useApplyFilters'
import { selectKeywordState, useParamsStore } from '@/stores/useParamsStore'

export const SearchInput: FC = memo(() => {
  const { replace, query } = useRouter()
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

  const clearSearch = async (): Promise<void> => {
    if (query.keyword) {
      await replace({ query: { ...query, keyword: [] } }, undefined, {
        shallow: true,
      })
    } else {
      setKeyword('')
    }
  }

  const searchButtonTitle = t('searchButtonTitle')
  const searchPlaceholder = t('searchPlaceholder')

  return (
    <div className="relative">
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
      <div
        className={`absolute right-24 top-0 flex h-full items-center ${
          !keyword || !vacancies ? 'hidden' : ''
        }`}
      >
        <CloseButton onClick={clearSearch} />
      </div>
    </div>
  )
})
