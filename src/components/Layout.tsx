import React from 'react'
import Header from '../components/Header'

const Layout: React.FC = (props) => {
  return (
    <div className="mi-wrapper">
      <Header/>
      {props.children}
    </div>
  )
}

export default Layout
