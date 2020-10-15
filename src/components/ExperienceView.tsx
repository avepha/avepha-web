import React from 'react'
import {WorkingExperience} from 'src/data/types'
import SmallTitle from 'src/components/small-title'
import ExperienceDetailView from 'src/components/ExperienceDetailView'

const ExperienceView: React.FC<{ experience: WorkingExperience }> = ({experience}) => {
  const {icon, topic, details} = experience
  return (
    <div className="mi-resume-area mi-section mt-30">
      <div className="container">
        <SmallTitle title={topic} icon={icon}/>
        <div className="mi-resume-wrapper">
          {
            details.map((detail) => {
              return <ExperienceDetailView detail={detail} key={detail.id}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ExperienceView
