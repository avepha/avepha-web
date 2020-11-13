import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import {NotificationContainer} from 'src/components/notifications'

type LayoutProps = {
  title: string
}

const Layout: React.FC<LayoutProps> = ({title, children}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta name="description" content="Software Engineer - Let code speak"/>
        <meta name="keywords" content="Farhan, avepha, nextjs"/>
        <meta name="author" content="Farhan Poh-asae"/>
        <meta property="og:title" content={title}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="Software Engineer - Let code speak"/>
        <meta property="og:url" content="https://avepha.me/personal"/>
        <meta property="og:image" content="https://avepha.me/images/brand-image.jpg"/>
      </Head>
      <NotificationContainer/>
      <div className="mi-wrapper background-container">
        <Header/>
        {children}
      </div>
    </>
  )
}

export default Layout
