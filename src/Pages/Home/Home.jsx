import React from 'react'
import NavWrapper from '../../Components/NavWrapper'
import Hero from '../../Components/Hero/Hero'
import Mission from '../../Components/Mission/Mission'
import About from '../../Components/About/About'
import Highlight from '../../Components/Highlight/Highlight'
import Gallery from '../../Components/Gallery/Gallery'
import Blog from '../../Components/Blog/Blog'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Info from '../../Components/Info/Info'

function Home() {
  return (
    <NavWrapper>
         <Hero/>
         <Mission/>
         <About/>
         <Highlight/>
         <Gallery/>
         <Blog/>
         <Testimonial/>
         <Info/>
      
    </NavWrapper>
  )
}

export default Home
