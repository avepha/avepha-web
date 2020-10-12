import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.scss'
import 'react-typist/dist/Typist.css'
import Home from './pages/Home'
import About from './pages/About'
import Resumes from './pages/Resumes'
import Portfolios from './pages/Portfolios'
import Contact from './pages/Contact'
import Notfound from './pages/Notfound'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/resume" component={Resumes}/>
          <Route path="/portfolios" component={Portfolios}/>
          <Route path="/contact" component={Contact}/>
          <Route path="*" component={Notfound}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
