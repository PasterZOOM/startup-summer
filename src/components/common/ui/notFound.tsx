import { FC } from 'react'

import { Button } from '@mantine/core'
import { Open_Sans as OpenSans } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { NotFoundSvg } from '@/components/svg/notFoundSvg'
import { ROUT_PATHS } from '@/enums/paths'

const openSans = OpenSans({ subsets: ['latin'] })

export const NotFound: FC = () => {
  const { t } = useTranslation('common')

  const { push } = useRouter()

  const onButtonClick = async (): Promise<void> => {
    await push(ROUT_PATHS.VACANCIES)
  }

  const notFoundMessage = t('notFoundMessage', 'Упс, здесь еще ничего нет!')
  const notFoundButtonTitle = t('notFoundButtonTitle', 'Поиск Вакансий')

  return (
    <div className="flex flex-col items-center gap-8 py-30">
      <NotFoundSvg />
      <h2 className="text-center text-title-ll font-bold text-gray-900">{notFoundMessage}</h2>
      <Link href={ROUT_PATHS.VACANCIES}>
        <Button
          variant="light"
          radius="md"
          className={`bg-blue-100 ${openSans.className}`}
          onClick={onButtonClick}
        >
          {notFoundButtonTitle}
        </Button>
      </Link>
    </div>
  )
}
