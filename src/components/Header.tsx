import React, {useState} from 'react'
import ActiveLink from 'src/components/ActiveLink'

const Header: React.FC = () => {
  const [navigationToggle, setNavigationToggle] = useState(false)
  
  const handleNavigationToggle = () => {
    setNavigationToggle(!navigationToggle)
  }
  
  return (
    <nav className={navigationToggle ? 'mi-header is-visible' : 'mi-header'}>
      <button onClick={handleNavigationToggle} className="mi-header-toggler">
        {!navigationToggle ? '=' :
          'x'}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image d-none d-md-none d-lg-block">
          <h3><span className="color-body font-weight-bold">AVEPHA</span></h3>
          <ActiveLink href="/">
            <a><img src="/images/brand-image.jpg" alt="brandimage"/></a>
          </ActiveLink>
        </div>
        <ul className="mi-header-menu">
          <li>
            <ActiveLink href="/personal"><a>Home</a></ActiveLink>
          </li>
          <li>
            <ActiveLink href="/personal/about"><a>About</a></ActiveLink>
          </li>
          <li>
            <ActiveLink href="/personal/experience"><a>Working Experience</a></ActiveLink>
          </li>
          <li>
            <ActiveLink href="/personal/photos"><a>Photos</a></ActiveLink>
          </li>
          <li>
            <ActiveLink href="/personal/contact"><a>Contact</a></ActiveLink>
          </li>
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
