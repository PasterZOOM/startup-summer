import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { NotFoundSvg } from '@/components/svg/notFoundSvg'

export const Empty: FC = () => {
  const { t } = useTranslation('common')

  const notFoundMessage = t('notFoundMessage')

  return (
    <div className="flex flex-col items-center gap-8 pt-10 md:pt-30">
      <NotFoundSvg />
      <h2 className="title-s text-center font-bold text-gray-900 md:text-title-ll">
        {notFoundMessage}
      </h2>
    </div>
  )
}
