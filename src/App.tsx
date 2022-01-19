import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import { Home, About, Contact } from './Pages'
import { Header, Footer } from './Components'

import socialLinks from './misc/socialLinks.json'

const { useState } = React
export default function App() {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className="App">
      <Header
        collapsed={collapsed}
        toggleNavbar={toggleNavbar}
        socialLinks={socialLinks}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}
