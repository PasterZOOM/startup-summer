import { Dispatch, FC, ReactNode, SetStateAction, useEffect } from 'react'

import { LAPTOP_WIDTH } from '@/constatnts/constants'
import { useWindowSize } from '@/hooks/useWindowSize'

type PropsType = {
  children: ReactNode
  isOpenFilters: boolean
  setIsOpenFilters: Dispatch<SetStateAction<boolean>>
}

export const SidebarWrapper: FC<PropsType> = ({ children, setIsOpenFilters, isOpenFilters }) => {
  const { width } = useWindowSize()

  const closeFilters = (): void => {
    setIsOpenFilters(false)
  }

  useEffect(() => {
    if (width > LAPTOP_WIDTH) {
      closeFilters()
    }
  }, [width])

  useEffect(() => {
    if (isOpenFilters) {
      document.body.style.overflowY = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflowY = 'visible'
      document.body.style.touchAction = 'auto'
    }
  }, [isOpenFilters])

  return (
    <>
      <div
        className={`inset-0 z-10 bg-black bg-opacity-30 ${isOpenFilters ? 'fixed' : 'hidden'}`}
        onClick={closeFilters}
        aria-hidden
      />
      <aside
        className={`fixed left-0 right-0 z-20 max-w-full transition-all lg:static lg:z-auto lg:max-w-193.25 ${
          isOpenFilters ? 'bottom-16 md:bottom-20' : '-bottom-full'
        }`}
      >
        {children}
      </aside>
    </>
  )
}
