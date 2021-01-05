import React from 'react'

import Navbar from './navbar'

import '../components/layout.css';
import Footer from './footer';
const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
