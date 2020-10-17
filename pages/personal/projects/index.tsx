import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import SectionTitle from 'src/components/SectionTitle'
import ProjectView from 'src/components/ProjectView'
import db from 'src/data/database'

import {TProject} from 'src/data/types'

const ProjectPage: NextPage<{projects: TProject[]}> = ({projects}) => {
  return (
    <>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <SectionTitle title="Projects"/>
          <ProjectView projects={projects}/>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: db.projects
    }
  }
}

export default ProjectPage
