import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { HeaderLinks } from '@/components/common/header/links/headerLinks'
import { ROUT_PATHS } from '@/enums/paths'

export const FavoritesLink: FC = () => {
  const { t } = useTranslation('common')

  const favoritesTitle = t('favoritesTitle')

  return <HeaderLinks href={{ pathname: ROUT_PATHS.FAVORITES }}>{favoritesTitle}</HeaderLinks>
}
