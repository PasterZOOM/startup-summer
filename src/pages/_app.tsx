import '@/styles/globals.css'
import { ReactElement, ReactNode, useState } from 'react'

import { MantineProvider } from '@mantine/core'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout): ReactNode => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false, retryDelay: 3000 } },
      })
  )
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </MantineProvider>
    </>
  )
}

export default App
