import "../globals.css"
import type { AppProps } from "next/app"
import React from "react"
import Layout from "../src/components/Layout"
import { GlobalStateProvider } from "../src/store/GlobalStore"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalStateProvider>
  )
}
export default MyApp
