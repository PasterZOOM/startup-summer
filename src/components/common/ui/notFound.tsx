import { FC } from 'react'

import { Button } from '@mantine/core'
// eslint-disable-next-line camelcase
import { Open_Sans } from 'next/font/google'

import { NotFoundSvg } from '@/components/svg/notFoundSvg'

const openSans = Open_Sans({ subsets: ['latin'] })

export const NotFound: FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-30">
      <NotFoundSvg />
      <h2 className="text-center text-title-ll font-bold text-gray-900">
        Упс, здесь еще ничего нет!
      </h2>
      <Button variant="light" radius="md" className={`bg-blue-100 ${openSans.className}`}>
        Поиск Вакансий
      </Button>
    </div>
  )
}
