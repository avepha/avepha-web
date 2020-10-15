import React, {useRef, useState} from 'react'
import ActiveLink from 'src/components/ActiveLink'
import dynamic from 'next/dynamic'
import useClickOutSide from 'src/lib/hooks/useOutside'
// @ts-ignore
const LineIcon: any = dynamic(() => import ('react-lineicons'), {ssr: false})

const Header: React.FC = () => {
  const headerRef = useRef(null)
  
  const [navigationToggle, setNavigationToggle] = useState(false)
  
  const handleNavigationToggle = () => {
    setNavigationToggle(!navigationToggle)
  }
  
  useClickOutSide(headerRef, () => {
    setNavigationToggle(false)
  })
  
  return (
    <nav ref={headerRef} className={navigationToggle ? 'mi-header is-visible' : 'mi-header'}>
      <button name="nav-toggle" onClick={handleNavigationToggle} className="mi-header-toggler">
        {!navigationToggle ? <LineIcon name="menu"/> : <LineIcon name="close"/>}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image d-none d-md-none d-lg-block">
          <h3>
            <span className="color-body font-weight-bold">AVEPHA</span>
          </h3>
          <ActiveLink href="/">
            <a><img src="/images/brand-image.jpg" alt="brandimage"/></a>
          </ActiveLink>
        </div>
        <ul className="mi-header-menu" onClick={() => {
          setTimeout(() => handleNavigationToggle(), 500)
        }}>
          <li>
            <ActiveLink href="/personal"><a>Home</a></ActiveLink>
          </li>
          <li>
            <ActiveLink href="/personal/about"><a>About</a></ActiveLink>
          </li>
          <li>
            <ActiveLink href="/personal/skill"><a>Technical skills</a></ActiveLink>
          </li><li>
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
