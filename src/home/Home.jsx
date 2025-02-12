import React from 'react'
import Navbar from "../components/Navbar"
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Freecourse from '../components/Freecourse'

function Home() {
  return ( 
  <>
   <Navbar/>
     <Banner />
  <Freecourse />
  <Footer />
  </>
  )
}

export default Home