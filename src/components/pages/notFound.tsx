import { FC, useEffect } from 'react'

import { Button } from '@mantine/core'
import { Inter, Open_Sans as OpenSans } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { NotFoundSvg } from '@/components/svg/notFoundSvg'
import { ROUT_PATHS } from '@/enums/paths'
import { selectClearParams, useParamsStore } from '@/stores/useParamsStore'

const openSans = OpenSans({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const NotFound: FC = () => {
  const { t } = useTranslation('common')

  const { push } = useRouter()

  const clearParams = useParamsStore(selectClearParams)

  const onButtonClick = async (): Promise<void> => {
    await push(ROUT_PATHS.VACANCIES)
  }

  const notFoundMessage = t('notFoundMessage', 'Упс, здесь еще ничего нет!')
  const notFoundButtonTitle = t('notFoundButtonTitle', 'Поиск Вакансий')

  useEffect(() => {
    clearParams()
  }, [])

  return (
    <main className={`flex flex-col items-center gap-8 py-30 ${inter.className}`}>
      <NotFoundSvg />
      <h2 className="text-center text-title-ll font-bold text-gray-900">{notFoundMessage}</h2>
      <Link href={ROUT_PATHS.VACANCIES}>
        <Button
          variant="light"
          radius="md"
          size="md"
          className={`bg-blue-100 px-6 py-0.5 text-sm ${openSans.className}`}
          onClick={onButtonClick}
        >
          {notFoundButtonTitle}
        </Button>
      </Link>
    </main>
  )
}
