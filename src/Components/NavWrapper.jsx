import React from 'react'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'

function NavWrapper({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer/>
    </>
  )
}

export default NavWrapper
