import { FC, ReactNode, useEffect } from 'react'

import { LAPTOP_WIDTH } from '@/constatnts/constants'
import { useWindowSize } from '@/hooks/useWindowSize'

type PropsType = {
  children: ReactNode
  opened: boolean
  closeSidebar: () => void
  bias: string
}

export const SubWrapper: FC<PropsType> = ({ children, closeSidebar, opened, bias }) => {
  const { width } = useWindowSize()

  useEffect(() => {
    if (width > LAPTOP_WIDTH) {
      closeSidebar()
    }
  }, [width])

  useEffect(() => {
    if (opened) {
      document.body.style.overflowY = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflowY = 'visible'
      document.body.style.touchAction = 'auto'
    }
  }, [opened])

  return (
    <>
      <div
        className={`inset-0 bg-black bg-opacity-30 transition-all ${opened ? 'fixed z-40' : ''}`}
        onClick={closeSidebar}
        aria-hidden
      />
      <div
        className={`fixed left-0 right-0 max-w-full transition-all lg:static lg:z-auto lg:max-w-193.25 ${
          opened ? 'z-40' : ''
        } ${bias}`}
        ref={node =>
          node &&
          (opened || width > LAPTOP_WIDTH
            ? node.removeAttribute('inert')
            : node.setAttribute('inert', ''))
        }
      >
        {children}
      </div>
    </>
  )
}
