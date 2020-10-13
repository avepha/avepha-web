import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'

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
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:og:description" content="Farhan Poh-asae personal website and journeys" />
        <meta property="og:url" content="https://personal.avepha.io" />
        <meta property="og:image" content="https://personal.avepha.io/images/brand-image.jpg" />
      </Head>
      <div className="mi-wrapper">
        <Header/>
        {children}
      </div>
    </>
  )
}

export default Layout