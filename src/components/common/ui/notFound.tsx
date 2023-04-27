import { FC } from 'react'

import { Button } from '@mantine/core'
import { Open_Sans as OpenSans } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { NotFoundSvg } from '@/components/svg/notFoundSvg'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { selectClearParams, useParamsStore } from '@/store/useParamsStore'

const openSans = OpenSans({ subsets: ['latin'] })

export const NotFound: FC = () => {
  const { pathname, push } = useRouter()
  const clearParams = useParamsStore(selectClearParams)
  const { refetch } = useGetAllVacancies({ enabled: false })

  const onButtonClick = async (): Promise<void> => {
    if (pathname.includes('/vacancies')) {
      await clearParams()
      await refetch()
    } else {
      await push('/vacancies')
    }
  }

  return (
    <div className="flex flex-col items-center gap-8 py-30">
      <NotFoundSvg />
      <h2 className="text-center text-title-ll font-bold text-gray-900">
        Упс, здесь еще ничего нет!
      </h2>
      <Link href="/vacancies">
        <Button
          variant="light"
          radius="md"
          className={`bg-blue-100 ${openSans.className}`}
          onClick={onButtonClick}
        >
          Поиск Вакансий
        </Button>
      </Link>
    </div>
  )
}
