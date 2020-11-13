import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import SectionTitle from 'src/components/SectionTitle'
import db from 'src/data/database'
import {Skill} from 'src/data/types'

const SkillPage: NextPage<{ skill: Skill }> = ({skill}) => {
  return (
    <>
      <div className="mi-section mi-padding-top">
        <div className="container">
          <SectionTitle title="Tech skills"/>
          <h3 className="font-weight-bold color-body mb-0">Programming</h3>
          <hr className="divider"/>
          <div className="d-inline-block w-100">
            {
              skill.programming.map(({name,}) => {
                return (
                  <h4 key={name} className="d-inline-block ml-1">
                    <span className="badge badge-light">{name}</span>
                  </h4>
                )
              })
            }
          </div>
          
          <h3 className="font-weight-bold color-body mb-0 mt-4">Back-end</h3>
          <hr className="divider"/>
          <div className="skill-container">
            {
              skill.backend.map(({name, src}) => (
                <figure key={name}>
                  <img className="tech-logo" src={src} alt={name}/>
                </figure>
              ))
            }
          </div>
          <h3 className="font-weight-bold color-body mt-4 mb-0">Front-end</h3>
          <hr className="divider"/>
          <div className="skill-container">
            {
              skill.frontend.map(({name, src}) => (
                <figure key={name}>
                  <img className="tech-logo" src={src} alt={name}/>
                </figure>
              ))
            }
          </div>
  
          <h3 className="font-weight-bold color-body mt-4 mb-0">Others</h3>
          <hr className="divider"/>
          <div className="skill-container">
            {
              skill.others.map(({name, src}) => (
                <figure key={name}>
                  <img className="tech-logo" src={src} alt={name}/>
                </figure>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<{ skill: Skill }> = async () => {
  return {
    props: {
      skill: db.skill,
    }
  }
}

export default SkillPage
