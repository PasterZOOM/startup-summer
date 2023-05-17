import { FC } from 'react'

import { FavoritesLink } from '@/components/common/header/links/FavoritesLink'
import { VacanciesLink } from '@/components/common/header/links/VacanciesLink'

type PropsType = {
  className: string
  onClickLinkCallBack?: () => void
}

export const Navbar: FC<PropsType> = ({ className, onClickLinkCallBack }) => {
  return (
    <nav className={className}>
      <VacanciesLink onClickCallBack={onClickLinkCallBack} />
      <FavoritesLink onClickCallBack={onClickLinkCallBack} />
    </nav>
  )
}
