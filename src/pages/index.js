import React from 'react'

import '../styles/Home.scss'
import Header from '../Components/Header'
import Home from './Home'
import About from './About'

function index() {
  return (
    <div>
      <Header />
      <Home />
      <About />

    </div>
  )
}

export default index
