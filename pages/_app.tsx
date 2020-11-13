import React, {useEffect, useState} from 'react'
import {NextPage} from 'next'
import {useRouter} from 'next/router'
import * as gtag from 'src/lib/gtag'

import 'assets/App.scss'
import 'assets/index.css'
import 'react-typist/dist/Typist.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from 'src/components/Layout'
import DevModal from 'src/components/DevModal'

const App: NextPage<any> = ({Component, pageProps}) => {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', (url) => {
      gtag.pageview(url)
    })
    return () => {
      router.events.off('routeChangeComplete', (url) => {
        gtag.pageview(url)
      })
    }
  }, [router.events])
  
  return (
    <>
      <DevModal/>
      <Layout title="Avepha - Home">
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
