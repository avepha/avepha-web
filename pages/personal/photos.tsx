import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import SectionTitle from '../../src/components/section-title'

const PhotosPage: NextPage = () => {
  return (
    <>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <SectionTitle title="Photos"/>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default PhotosPage
