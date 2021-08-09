import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import LoadingIndicator from './LoadingIndicator'
import NProgress from 'nprogress'

const RouteLoadingIndicator = () => {
  function routeChangeStart(arg0: string, routeChangeStart: any) {
    setRouteLoading(true)
    // NProgress.start()
  }

  function routeChangeEnd(arg0: string, routeChangeEnd: any) {
    // NProgress.done()
    setRouteLoading(false)
  }

  const [routeLoading, setRouteLoading] = useState(false)
  useEffect(() => {
    Router.events.on('routeChangeStart', routeChangeStart)
    Router.events.on('routeChangeComplete', routeChangeEnd)
    Router.events.on('routeChangeError', routeChangeEnd)
  }, [])

  return (
    <div>
      <LoadingIndicator open={routeLoading} />
    </div>
  )
}

export default RouteLoadingIndicator
