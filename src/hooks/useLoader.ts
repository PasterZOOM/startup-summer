import { useEffect } from 'react'

import { useRouter } from 'next/router'
import nProgress from 'nprogress'

export const useLoader = (): void => {
  const router = useRouter()

  useEffect(() => {
    const startLoading = (): nProgress.NProgress => nProgress.start()
    const endLoading = (): nProgress.NProgress => nProgress.done()

    router.events.on('routeChangeStart', startLoading)
    router.events.on('routeChangeComplete', endLoading)
    router.events.on('routeChangeError', endLoading)

    return () => {
      router.events.off('routeChangeStart', startLoading)
      router.events.off('routeChangeComplete', endLoading)
      router.events.off('routeChangeError', endLoading)
    }
  }, [router])
}
