import { ReactElement, ReactNode } from 'react'

import { NextPage } from 'next'
import { AppProps } from 'next/app'
import '../styles/globals.css'

type NextPageWithLyout = NextPage & {
  getLayout?: ( page: ReactElement ) => ReactNode
}

type AppPropsWithLyout = AppProps & {
  Component: NextPageWithLyout
}

function MyApp({ Component, pageProps }: AppPropsWithLyout) {
  const getLayout = Component.getLayout || ( (page) => page )
  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
