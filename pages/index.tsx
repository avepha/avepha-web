import React, {useEffect} from 'react'
import {NextPage} from 'next'
import Router from 'next/router'

const Index: NextPage = () => {
  useEffect(() => {Router.replace('/personal').then((() => null))})
  return <></>
}

export default Index
