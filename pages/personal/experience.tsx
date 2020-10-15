import React from 'react'
import {GetServerSideProps, NextPage} from 'next'
import SectionTitle from '../../src/components/section-title'
import db from '../../src/data/database'

import {WorkingExperience} from '../../src/data/types'
import ExperienceView from '../../src/components/ExperienceView'

const ExperiencePage: NextPage<{ experiences: [WorkingExperience] }> = ({experiences}) => {
  return (
    <div className="mi-section mi-padding-top">
      <div className="container">
        <SectionTitle title="Experience"/>
        {
          experiences && experiences.map((experience, index) => {
            return <ExperienceView key={index} experience={experience}/>
          })
        }
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      experiences: db.experiences
    }
  }
}

export default ExperiencePage
