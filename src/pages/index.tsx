import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { ROUT_PATHS } from '@/enums/paths'
import { NextPageWithLayout } from '@/pages/_app'

const Home: NextPageWithLayout = () => {
  const { push } = useRouter()

  useEffect(() => {
    push(ROUT_PATHS.VACANCIES).then()
  })

  return null
}

export default Home
