import { FC } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { v1 } from 'uuid'

import { LogoSvg } from '@/components/svg/logoSvg'

type LinkType = {
  id: string
  title: string
  href: string
}
const links: LinkType[] = [
  { id: v1(), title: 'Поиск Вакансий', href: '/vacancies' },
  { id: v1(), title: 'Избранное', href: '/favorites' },
]

const Header: FC = () => {
  const { pathname } = useRouter()

  return (
    <div className="flex items-center justify-around bg-white py-6">
      <Link href={links[0].href} className="focus:outline-offset-4 focus:outline-blue-main-500">
        <LogoSvg />
      </Link>
      <nav className="flex justify-between gap-15">
        {links.map(link => (
          <Link
            key={link.id}
            href={link.href}
            className={`focus:outline-offset-4 focus:outline-blue-main-500 ${
              pathname.includes(link.href) ? 'text-blue-main-500' : ''
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
