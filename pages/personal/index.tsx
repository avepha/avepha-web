import React, {useState} from 'react'
import Typist from 'react-typist'
import Link from 'next/link'
import {GetStaticProps, NextPage} from 'next'
import SocialIcons from '../../src/components/SocialIcons'
import GraphParticles from '../../src/components/GraphParticles'
import db from '../../src/data/database'
import pkg from '../../package.json'

const HomePage: NextPage<{information: any}> = ({information}) => {
  const [counter, setCounter] = useState(0)
  const {socialLinks} = information
  return (
    <>
      <div className="mi-home-area mi-padding-section">
        <GraphParticles/>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12">
              <div className="mi-header-image d-block d-sm-block d-lg-none">
                <Link href="/">
                  <a><img src={information.brandImage} alt="brandimage"/></a>
                </Link>
              </div>
              <div className="mi-home-content">
                <h1>
                  <span className="color-theme-dark">{information.name}</span>
                </h1>
                <h2 className="color-body">
                  <Typist key={counter} onTypingDone={() => setCounter(counter + 1)} cursor={{
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
                <SocialIcons bordered socialLinks={socialLinks}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="build-version">
        <img src="https://api.iconify.design/logos-nextjs.svg?height=35" className="mr-3" alt="nextjs"/>
        <span>build: {pkg.version}</span>
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

export default HomePage
