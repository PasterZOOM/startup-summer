import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'

import { useTranslation } from 'next-i18next'

import { MainButton } from '@/components/common/ui/buttons/mainButton'
import { TABLET_WIDTH } from '@/constatnts/constants'
import { useApplyFilters } from '@/hooks/useApplyFilters'
import { useClearParams } from '@/hooks/useClearParams'
import { useWindowSize } from '@/hooks/useWindowSize'

interface FilterButtonsProps {
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const MobileFiltersButtons: FC<FilterButtonsProps> = ({ isOpen, setOpen }) => {
  const { height, width } = useWindowSize()
  const { t } = useTranslation('filters')
  const clearParams = useClearParams()
  const applyFilters = useApplyFilters()

  const [bodyHeight, setBodyHeight] = useState(0)
  const resetAllButtonTitle = t('resetAllButtonTitle')
  const applyButtonTitle = t('applyButtonTitle')
  const filtersTitle = t('filtersTitle')

  const onClickApplyButton = (): void => {
    setOpen(false)
    applyFilters()
  }

  const onClickResetButton = (): void => {
    setOpen(false)
    clearParams()
  }

  useEffect(() => {
    if (width > TABLET_WIDTH) {
      const sidebarHeightTablet = 90

      setBodyHeight(document.body.clientHeight + sidebarHeightTablet)
    } else {
      const sidebarHeightMobile = 74

      setBodyHeight(document.body.clientHeight + sidebarHeightMobile)
    }
  })

  return (
    <div
      className={`bottom-0 left-0 right-0 z-50 flex w-full gap-3 bg-white p-4 md:p-6 lg:hidden ${
        height > bodyHeight ? 'fixed' : 'sticky'
      }`}
    >
      {isOpen ? (
        <>
          <MainButton className="w-full p-0" size="md" onClick={onClickResetButton}>
            {resetAllButtonTitle}
          </MainButton>
          <MainButton className="w-full p-0" size="md" onClick={onClickApplyButton}>
            {applyButtonTitle}
          </MainButton>
        </>
      ) : (
        <MainButton
          className="w-full"
          size="md"
          onClick={() => {
            setOpen(true)
          }}
        >
          {filtersTitle}
        </MainButton>
      )}
    </div>
  )
}