import { FC, KeyboardEventHandler } from 'react'

import { Button, Input } from '@mantine/core'

import { SearchIcon } from '@/components/svg/searchIcon'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { selectKeywordState, useParamsStore } from '@/store/useParamsStore'

export const SearchInput: FC = () => {
  const [keyword, setKeyword] = useParamsStore(selectKeywordState)

  const { refetch } = useGetAllVacancies()

  const onKeyDownEnter: KeyboardEventHandler = async e => {
    if (e.key === 'Enter') {
      await refetch()
    }
  }

  return (
    <Input
      icon={<SearchIcon />}
      radius="md"
      styles={{ input: { height: '48px' } }}
      placeholder="Введите название вакансии"
      rightSection={
        <Button radius="md" className="bg-blue-main-500" onClick={() => refetch()}>
          Поиск
        </Button>
      }
      rightSectionWidth={95}
      value={keyword ?? ''}
      onChange={e => setKeyword(e.currentTarget.value || '')}
      onKeyDown={onKeyDownEnter}
    />
  )
}
