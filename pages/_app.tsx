import '../globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Layout from '../src/components/Layout'
import { GlobalStateProvider } from '../src/store/GlobalStore'
import { LoadingStateProvider } from '../src/store/LoadingStore'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <LoadingStateProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoadingStateProvider>
    </GlobalStateProvider>
  )
}
export default MyApp
