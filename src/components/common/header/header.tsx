import { UrlObject } from 'url'

import { FC, useEffect, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { v1 } from 'uuid'

import { LogoSvg } from '@/components/svg/logoSvg'
import { ROUT_PATHS } from '@/enums/paths'
import { selectParamsState, useParamsStore } from '@/stores/useParamsStore'

type LinkType = {
  id: string
  title: string
  baseUrl: string
  href: string | UrlObject
}

const Header: FC = () => {
  const { t } = useTranslation('common')

  const vacanciesTitle = t('vacanciesTitle', 'Поиск Вакансий')
  const favoritesTitle = t('favoritesTitle', 'Избранное')

  const { pathname } = useRouter()
  const [isVisible, setIsVisible] = useState(true)
  const [params] = useParamsStore(selectParamsState)

  const [links, setLinks] = useState<LinkType[]>([])

  useEffect(() => {
    setLinks([
      {
        id: v1(),
        title: vacanciesTitle,
        baseUrl: ROUT_PATHS.VACANCIES,
        href: { pathname: ROUT_PATHS.VACANCIES, query: params },
      },
      {
        id: v1(),
        title: favoritesTitle,
        baseUrl: ROUT_PATHS.FAVORITES,
        href: ROUT_PATHS.FAVORITES,
      },
    ])
  }, [params])

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
        isVisible ? 'top-0' : '-top-20'
      } sticky z-30  transform  bg-white px-3 py-5 duration-300 md:px-10`}
    >
      <div className="mx-auto flex max-w-279 items-center justify-between">
        <Link
          href={links[0]?.baseUrl ?? ''}
          className="focus:outline-offset-4 focus:outline-blue-main-500"
        >
          <LogoSvg />
        </Link>
        <nav className="contents justify-between gap-15 md:flex">
          {links.map(link => (
            <Link
              key={link.id}
              href={link.href}
              className={`focus:outline-offset-4 focus:outline-blue-main-500 ${
                pathname.includes(link.baseUrl) ? 'text-blue-main-500' : ''
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="hidden w-35.25 md:block" />
      </div>
    </div>
  )
}

export default Header
