import { ReactElement } from 'react'

export const MainLayout = (page: ReactElement): JSX.Element => {
  return (
    <>
      Header
      <div>{page}</div>
    </>
  )
}
