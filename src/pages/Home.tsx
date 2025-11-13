import React from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Activities from '../components/home/Activities'
import Sermons from '../components/home/Sermons'
import LifeGroupsCTA from '../components/home/LifeGroupsCTA'
import MediaGallery from '../components/home/MediaGallery'
import Contact from '../components/home/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Activities />
      <Sermons />
      <LifeGroupsCTA />
      <MediaGallery />
      <Contact />
    </div>
  )
}

export default Home
