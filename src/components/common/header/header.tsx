import { UrlObject } from 'url'

import { FC, useEffect, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { v1 } from 'uuid'

import { LogoSvg } from '@/components/svg/logoSvg'
import { selectParamsState, useParamsStore } from '@/store/useParamsStore'

type LinkType = {
  id: string
  title: string
  baseUrl: string
  href: string | UrlObject
}

const Header: FC = () => {
  const { pathname } = useRouter()
  const [isVisible, setIsVisible] = useState(true)
  const [params] = useParamsStore(selectParamsState)

  const links: LinkType[] = [
    {
      id: v1(),
      title: 'Поиск Вакансий',
      baseUrl: '/vacancies',
      href: { pathname: '/vacancies', query: params },
    },
    { id: v1(), title: 'Избранное', baseUrl: '/favorites', href: '/favorites' },
  ]

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
      } sticky z-30 flex transform items-center justify-around bg-white px-3 py-5 duration-300`}
    >
      <Link href={links[0].baseUrl} className="focus:outline-offset-4 focus:outline-blue-main-500">
        <LogoSvg />
      </Link>
      <nav className="flex justify-between gap-15">
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
      <div className="w-35.25" />
    </div>
  )
}

export default Header
