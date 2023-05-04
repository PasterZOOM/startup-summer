import '@/styles/globals.css'
import { ReactElement, useState } from 'react'

import { MantineProvider } from '@mantine/core'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

import { useGetAccessToken } from '@/hooks/useGetAccessToken'
import { useLoader } from '@/hooks/useLoader'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
  useLoader()
  useGetAccessToken()

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
        <title>Startup Summer</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta property="og:url" content="https://startup-summer-lemon.vercel.app/" key="og:url" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Startup Summer" key="og:title" />
        <meta property="og:description" content="Startup Summer Test" key="og:description" />
        <meta
          name="twitter:site"
          content="https://startup-summer-lemon.vercel.app/"
          key="twitter:site"
        />
        <meta name="twitter:title" content="Startup Summer" />
        <meta name="twitter:description" content="Startup Summer Test" key="twitter:description" />
        <meta name="description" content="Startup Summer Test" key="description" />
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

export default appWithTranslation(App)
