import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FsLightbox from 'fslightbox-react'
import * as Icon from 'react-feather'
import Sectiontitle from '../components/Sectiontitle'
import Layout from '../components/Layout'
import Smalltitle from '../components/Smalltitle'

function About() {
  const [toggler, setToggler] = useState(false)
  const [information, setInformation] = useState('')


  const handleToggler = () => {
    setToggler({
      toggler: !toggler,
    })
  }

  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setInformation(response.data)
    })
  }, [])

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Me"/>
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img
                  src={information.aboutImage}
                  alt="about"
                  onClick={() => handleToggler(!toggler)}
                />
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn/>
                </span>
                <FsLightbox
                  toggler={toggler}
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
      <div className="mi-service-area mi-section mi-padding-top mb-3">
        <div className="container">
          <Smalltitle title="Educational Qualifications" icon="book"/>
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

    </Layout>
  )
}

export default About
