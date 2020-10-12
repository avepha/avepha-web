import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Typist from 'react-typist'

import Socialicons from '../components/Socialicons'
import Layout from '../components/Layout'
import GraphParticles from '../components/GraphParticles'
import { Link } from 'react-router-dom'
import pkg from '../../package.json'

function Home() {
  const [information, setInformation] = useState<any>('')
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    axios.get('/api/information')
      .then(response => {
        setInformation(response.data)
      })
  }, [])
  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <GraphParticles/>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12">
              <div className="mi-header-image d-block d-sm-block d-lg-none">
                <Link to="/">
                  <img src={information.brandImage} alt="brandimage"/>
                </Link>
              </div>
              <div className="mi-home-content">
                <h1>
                  <span className="color-theme-dark">{information.name}</span>
                </h1>
                <h2 className="color-body">
                  <Typist key={counter}
                          onTypingDone={() => setCounter(counter + 1)} cursor={{
                    blink: true,
                    element: '_',
                    hideWhenDone: false,
                    hideWhenDoneDelay: 5000,
                  }}>
                    Embedded System
                    <Typist.Backspace count={16} delay={2000}/>
                    Full Stack Developer
                    <Typist.Backspace count={26} delay={2000}/>
                    Software Engineer
                    <Typist.Delay ms={5000}/>
                    <Typist.Backspace count={17} delay={100}/>
                  </Typist>
                </h2>
                <p>{information.aboutContent}</p>
                <Socialicons bordered/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute" style={{bottom: 0, right: 0, fontSize: 10}}>
        version: {pkg.version}
      </div>
    </Layout>
  )
}

export default Home
