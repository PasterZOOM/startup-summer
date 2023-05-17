import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { HeaderLinks } from '@/components/common/header/links/headerLinks'
import { ROUT_PATHS } from '@/enums/paths'

type PropsType = {
  onClickCallBack?: () => void
}
export const FavoritesLink: FC<PropsType> = ({ onClickCallBack }) => {
  const { t } = useTranslation('common')

  const favoritesTitle = t('favoritesTitle')

  return (
    <HeaderLinks href={{ pathname: ROUT_PATHS.FAVORITES }} onClickCallBack={onClickCallBack}>
      {favoritesTitle}
    </HeaderLinks>
  )
}
