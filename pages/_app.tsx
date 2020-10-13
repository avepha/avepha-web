import React from 'react'
import {NextPage} from 'next'
import '../assets/App.scss'
import '../assets/index.css'
import 'react-typist/dist/Typist.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App: NextPage<any> = ({Component, pageProps}) => {
  return <Component {...pageProps} />
}

export default App
