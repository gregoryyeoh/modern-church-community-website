import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import LifeGroups from './pages/LifeGroups'
import Gallery from './pages/Gallery'
import Prayer from './pages/Prayer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/life-groups" element={<LifeGroups />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/prayer" element={<Prayer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
