import { FC } from 'react'

import { Button, Input } from '@mantine/core'

import { SearchIcon } from '@/components/svg/searchIcon'

export const SearchInput: FC = () => {
  return (
    <Input
      icon={<SearchIcon />}
      radius="md"
      styles={{ input: { height: '48px' } }}
      placeholder="Введите название вакансии"
      rightSection={
        <Button radius="md" className="bg-blue-main-500">
          Поиск
        </Button>
      }
      rightSectionWidth={95}
    />
  )
}
