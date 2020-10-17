import React from 'react'
import Project from './Project'
import {TProject} from 'src/data/types'

const ProjectView: React.FC<{projects: TProject[]}> = ({projects}) => {
  return (
    <div className="row mt-30-reverse">
      {projects.map((project, id) => (
        <div className="col-lg-6 col-md-6 col-12 mt-30" key={id}>
          <Project data={project}/>
        </div>
      ))}
    </div>
  )
}

export default ProjectView
