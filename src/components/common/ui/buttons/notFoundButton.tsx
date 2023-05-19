import { FC } from 'react'

import { Button } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { ROUT_PATHS } from '@/enums/paths'

export const NotFoundButton: FC = () => {
  const { t } = useTranslation('common')

  const { push } = useRouter()

  const onButtonClick = async (): Promise<void> => {
    await push(ROUT_PATHS.VACANCIES)
  }

  const notFoundButtonTitle = t('notFoundButtonTitle')

  return (
    <Link href={ROUT_PATHS.VACANCIES}>
      <Button
        variant="light"
        radius="md"
        className="bg-blue-100 px-6 py-0.5 text-sm"
        onClick={onButtonClick}
      >
        {notFoundButtonTitle}
      </Button>
    </Link>
  )
}
