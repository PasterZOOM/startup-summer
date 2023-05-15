import { FC, useEffect, useState } from 'react'

import Link from 'next/link'

import { FavoritesLink } from '@/components/common/header/links/FavoritesLink'
import { VacanciesLink } from '@/components/common/header/links/VacanciesLink'
import { LogoSvg } from '@/components/svg/logoSvg'
import { ROUT_PATHS } from '@/enums/paths'

const Header: FC = () => {
  const [isVisible, setIsVisible] = useState(true)

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
    <div
      className={`${
        isVisible ? 'top-0' : '-top-21'
      } sticky z-30 transform bg-white px-3 py-6 duration-300 md:px-10`}
    >
      <div className="mx-auto flex max-w-279 items-center justify-between">
        <Link
          href={ROUT_PATHS.VACANCIES}
          className="focus:outline-offset-4 focus:outline-blue-main-500"
        >
          <LogoSvg />
        </Link>
        <nav className="contents justify-between gap-15 md:flex">
          <VacanciesLink />
          <FavoritesLink />
        </nav>
        <div className="hidden w-35.25 md:block" />
      </div>
    </div>
  )
}

export default Header
