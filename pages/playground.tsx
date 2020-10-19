import React from 'react'
import {NextPage} from 'next'
import DefaultErrorPage from 'next/error'

const Index: NextPage = () => {
  if (process.env.NODE_ENV === 'production') {
    return <DefaultErrorPage statusCode={404}/>
  }
  
  return (
    <>
    
    </>
  )
}

export default Index
