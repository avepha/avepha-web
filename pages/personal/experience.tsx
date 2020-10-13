import React from 'react'
import {NextPage} from 'next'
import SectionTitle from '../../src/components/section-title'
import Layout from '../../src/components/Layout'

const ExperiencePage: NextPage = () => {
  return (
    <Layout title="Avepha - Experience">
      <div className="mi-section mi-padding-top">
        <div className="container">
          <SectionTitle title="Working Experience"/>
        </div>
      </div>
    </Layout>
  )
}

export default ExperiencePage
