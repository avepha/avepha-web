import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import LineIcon from 'react-lineicons';

function Header() {
  const [information, setInformation] = useState('');
  const [navigationToggler, setNavigationToggler] = useState(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  useEffect(() => {
    axios.get('/api/information')
      .then(response => {
        setInformation(response.data);
      });
  }, []);

  return (
    <nav className={navigationToggler ? 'mi-header is-visible' : 'mi-header'}>
      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        {!navigationToggler ? <LineIcon name="menu"/> :
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
  );
}


export default Header;
