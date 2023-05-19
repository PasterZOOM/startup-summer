import { FC } from 'react'

import { useTranslation } from 'next-i18next'
import { v1 } from 'uuid'

import { MainButton } from '@/components/common/ui/buttons/mainButton'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { useApplyFilters } from '@/hooks/useApplyFilters'
import { useClearParams } from '@/hooks/useClearParams'

interface FilterButtonsProps {
  isOpen: boolean
  setOpen: () => void
  setClose: () => void
}

export const MobileFiltersButtons: FC<FilterButtonsProps> = ({ isOpen, setOpen, setClose }) => {
  const { t } = useTranslation('filters')
  const clearParams = useClearParams()
  const applyFilters = useApplyFilters()

  const { data } = useGetAllVacancies()

  const resetAllButtonTitle = t('resetAllButtonTitle')
  const applyButtonTitle = t('applyButtonTitle')
  const filtersTitle = t('filtersTitle')

  const onClickApplyButton = (): void => {
    setClose()
    applyFilters()
  }

  const onClickResetButton = (): void => {
    setClose()
    clearParams()
  }

  const filterButtons = [
    { id: v1(), title: resetAllButtonTitle, onClick: onClickResetButton },
    { id: v1(), title: applyButtonTitle, onClick: onClickApplyButton },
  ]

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 flex w-full gap-3 bg-white p-4 md:p-6 lg:hidden ${
        isOpen ? 'z-50' : 'z-30'
      }`}
    >
      {isOpen ? (
        <>
          {filterButtons.map(filterButton => (
            <MainButton
              key={filterButton.id}
              className="w-full p-0"
              size="md"
              onClick={filterButton.onClick}
              disabled={!data}
            >
              {filterButton.title}
            </MainButton>
          ))}
        </>
      ) : (
        <MainButton
          className="w-full"
          size="md"
          onClick={() => {
            setOpen()
          }}
        >
          {filtersTitle}
        </MainButton>
      )}
    </div>
  )
}
