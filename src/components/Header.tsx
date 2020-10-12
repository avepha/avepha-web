import React, {useEffect, useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import axios from 'axios'
// @ts-ignore
import LineIcon from 'react-lineicons'

const Header: React.FC = () => {
  const [information, setInformation] = useState<any>('')
  const [navigationToggle, setNavigationToggle] = useState(false)
  
  const handleNavigationToggle = () => {
    setNavigationToggle(!navigationToggle)
  }
  
  useEffect(() => {
    axios.get('/api/information')
      .then(response => {
        setInformation(response.data)
      })
  }, [])
  
  return (
    <nav className={navigationToggle ? 'mi-header is-visible' : 'mi-header'}>
      <button onClick={handleNavigationToggle} className="mi-header-toggler">
        {!navigationToggle ? <LineIcon name="menu"/> :
          <LineIcon name="close"/>}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image d-none d-md-none d-lg-block">
          <h3><span className="color-body font-weight-bold">AVEPHA</span></h3>
          <Link to="/"><img src={information.brandImage} alt="brandimage"/></Link>
        </div>
        
        <ul className="mi-header-menu">
          <li><NavLink exact to="/"><span>Home</span></NavLink></li>
          <li><NavLink to="/about"><span>About</span></NavLink></li>
          <li><NavLink to="/resume"><span>Working Experience</span></NavLink></li>
          <li><NavLink to="/portfolios"><span>Photos</span></NavLink></li>
          <li><NavLink to="/contact"><span>Contact</span></NavLink></li>
        </ul>
        <p className="mi-header-copyright">
          <b>
            <a rel="noopener noreferrer" target="_blank" href="/">Avepha Web</a>
          </b> {new Date().getFullYear()}
        </p>
      </div>
    </nav>
  )
}

export default Header
