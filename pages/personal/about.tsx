import React, {useState} from 'react'
import {GetStaticProps, NextPage} from 'next'
import FsLightbox from 'fslightbox-react'
import * as Icon from 'react-feather'

import SectionTitle from 'src/components/SectionTitle'
import SmallTitle from 'src/components/SmallTitle'
import db from 'src/data/database'

const About: NextPage<{ information: any }> = ({information}) => {
  const [toggle, setToggle] = useState(false)
  
  return (
    <>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <SectionTitle title="About Me"/>
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img
                  src={information.aboutImage}
                  alt="about"
                  onClick={() => setToggle(!toggle)}
                />
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn/>
                </span>
                <FsLightbox
                  toggler={toggle}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  <span className="color-theme">{information.name}</span>
                </h3>
                <p>
                  Software engineer with 4 years of experience in programming,
                  Front-end, Back-end, Cloud and Embedded system in various
                  projects.
                </p>
                <ul>
                  {!information.name ? null : (
                    <li>
                      <b>Full Name</b> {information.name}
                    </li>
                  )}
                  {!information.age ? null : (
                    <li>
                      <b>Age</b> {information.age} Years
                    </li>
                  )}
                  {!information.phone ? null : (
                    <li>
                      <b>Phone</b> {information.phone}
                    </li>
                  )}
                  {!information.nationality ? null : (
                    <li>
                      <b>Nationality</b> {information.nationality}
                    </li>
                  )}
                  {!information.language ? null : (
                    <li>
                      <b>Languages</b> {information.language}
                    </li>
                  )}
                  {!information.email ? null : (
                    <li>
                      <b>Email</b> {information.email}
                    </li>
                  )}
                  {!information.address ? null : (
                    <li>
                      <b>Address</b> {information.address}
                    </li>
                  )}
                </ul>
                <a href={information.cvfile} className="mi-button">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-bottom pt-5">
        <div className="container">
          <SmallTitle title="Educational Qualifications" icon="book"/>
          <div className="mi-resume-wrapper">
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">2012-2015</h6>
              </div>
              <div className="mi-resume-details">
                <h5>Bachelor of engineering in Computer Engineering</h5>
                <h6 className="mi-resume-company">Mahidol Universiy</h6>
                <p><span className="font-weight-bold">First class honour with 3.64 GPA</span>.
                  Senior project, Robot
                  vision, 3D Environmental Reconstruction by using RGBD camera
                  with ROS and achieved <strong>3rd runner-up DSI
                    award.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      information: db.information
    }
  }
}

export default About
