import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { v1 } from 'uuid'

import logo from '../../../../public/logo.svg'

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
      <Link href={links[0].href}>
        <Image src={logo} alt="logo" width={141} height={36} />
      </Link>
      <nav className="flex justify-between gap-15">
        {links.map(link => (
          <Link
            key={link.id}
            href={link.href}
            className={pathname.includes(link.href) ? 'text-blue-main-500' : ''}
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
