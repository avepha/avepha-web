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
        <meta name="description" content="Farhan Poh-asae personal website and journeys"/>
        <meta name="keywords" content="Farhan, avepha, nextjs"/>
        <meta name="author" content="Farhan Poh-asae"/>
        
        <meta property="og:title" content={title}/>
        <meta property="og:type" content="website"/>
        <meta property="og:og:description" content="Farhan Poh-asae personal website and journeys"/>
        <meta property="og:url" content="https://avepha.me/personal"/>
        <meta property="og:image" content="https://avepha-web.s3.ap-south-1.amazonaws.com/portrait-photo-300x300.jpg"/>
      </Head>
      <NotificationContainer />
      <div className="mi-wrapper background-container">
        <Header/>
        {children}
      </div>
    </>
  )
}

export default Layout
