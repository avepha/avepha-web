import React, {useEffect} from 'react'
import {NextPage} from 'next'
import Router from 'next/router'

const Index: NextPage<any> = () => {
  useEffect(() => {
    Router.replace('/personal')
  })
  return (<></>)
}

export default Index
