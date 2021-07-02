import React from 'react'

import '../styles/Home.scss'
import Header from '../Components/Header'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

function index() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />

    </div>
  )
}

export default index
