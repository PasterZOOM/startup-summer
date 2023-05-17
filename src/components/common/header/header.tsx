import { FC, useEffect, useState } from 'react'

import { Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'

import { Navbar } from '@/components/common/header/navbar'
import { SubWrapper } from '@/components/common/wrappers/subWrapper'
import { LogoSvg } from '@/components/svg/logoSvg'
import { ROUT_PATHS } from '@/enums/paths'

const Header: FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [opened, { toggle, close }] = useDisclosure(false)

  useEffect(() => {
    let oldScrollTopPosition = 0

    window.onscroll = () => {
      const scrollTopPosition = document.documentElement.scrollTop

      if (oldScrollTopPosition !== 0) {
        if (oldScrollTopPosition < scrollTopPosition) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      }
      oldScrollTopPosition = scrollTopPosition
    }
  })

  return (
    <>
      <div
        className={`${isVisible ? 'top-0' : '-top-21'} ${
          opened ? 'z-50' : 'z-50 transform duration-300'
        } sticky  bg-white px-3 py-6 md:px-10`}
      >
        <div className="mx-auto flex max-w-279 items-center justify-between">
          <Link
            href={ROUT_PATHS.VACANCIES}
            className="focus:outline-offset-4 focus:outline-blue-main-500"
            onClick={close}
          >
            <LogoSvg />
          </Link>

          <Burger opened={opened} onClick={toggle} className="md:hidden" />

          <Navbar className="hidden justify-between gap-15 md:flex" />

          <div className="hidden w-35.25 md:block" />
        </div>
      </div>
      {/* Mobile navbar */}
      <SubWrapper opened={opened} closeSidebar={close} bias={opened ? 'top-20 ' : '-top-20'}>
        <Navbar
          className="flex flex-col items-center gap-4 bg-white p-4 md:hidden"
          onClickLinkCallBack={close}
        />
      </SubWrapper>
    </>
  )
}

export default Header
