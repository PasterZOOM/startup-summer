import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from '@/pages/_app'

const Home: NextPageWithLayout = () => {
  const { push } = useRouter()

  useEffect(() => {
    push('/vacancies').then()
  })

  return null
}

export default Home
