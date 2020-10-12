import React, {useEffect, useState} from 'react'
import axios from 'axios'
import TrackVisibility from 'react-on-screen'
import SectionTitle from '../components/section-title'
import SmallTitle from '../components/small-title'
import Layout from '../components/Layout'
import Progress from '../components/Progress'
import Resume from '../components/Resume'

function Resumes() {
  const [skills, setSkills] = useState<any>([])
  const [workingExperience, setWorkingExperience] = useState([])
  const [educationExperience, setEducationExperience] = useState([])
  
  useEffect(() => {
    axios.get('/api/skills')
      .then(response => {
        setSkills(response.data)
      })
    axios.get('/api/experience')
      .then(response => {
        setWorkingExperience(response.data.workingExperience)
        setEducationExperience(response.data.educationExperience)
      })
  }, [])
  
  return (
    <Layout>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <SectionTitle title="My Skills"/>
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              {skills.map((skill: any) => (
                <TrackVisibility once className="col-lg-6 mt-30"
                                 key={skill.title}>
                  <Progress title={skill.title} percentage={skill.value}/>
                </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <SectionTitle title="Resume"/>
          <SmallTitle title="Working Experience" icon="briefcase"/>
          <div className="mi-resume-wrapper">
            {workingExperience.map((workingExp: any) => (
              <Resume key={workingExp.id} resumeData={workingExp}/>
            ))}
          </div>
          <div className="mt-30"/>
          <SmallTitle title="Educational Qualifications" icon="book"/>
          <div className="mi-resume-wrapper">
            {educationExperience.map((educatonExp: any) => (
              <Resume key={educatonExp.id} resumeData={educatonExp}/>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Resumes
