import { UrlObject } from 'url'

import { memo, ReactNode } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

type PropsType = {
  href: UrlObject
  children: ReactNode
}
export const HeaderLinks = memo(({ href, children }: PropsType) => {
  const { pathname } = useRouter()

  return (
    <Link
      href={href}
      className={`focus:outline-offset-4 focus:outline-blue-main-500 ${
        pathname.includes(href.pathname ?? '') ? 'text-blue-main-500' : ''
      }`}
    >
      {children}
    </Link>
  )
})
