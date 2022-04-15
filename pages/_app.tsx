import type {AppProps} from 'next/app'
import React from 'react'
import '../globals.css'
import Layout from '../src/components/Layout'
import RouteLoadingIndicator from '../src/components/RouteLoadingIndicator'
import {GlobalStateProvider} from '../src/store/GlobalStore'
import {LoadingStateProvider} from '../src/store/LoadingStore'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <GlobalStateProvider>
      <LoadingStateProvider>
        <RouteLoadingIndicator />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoadingStateProvider>
    </GlobalStateProvider>
  )
}
export default MyApp
