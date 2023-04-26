import { ReactElement } from 'react'

import Header from '@/pages/components/common/header/header'

export const MainLayout = (page: ReactElement): JSX.Element => {
  return (
    <>
      <Header />
      <div>{page}</div>
    </>
  )
}
