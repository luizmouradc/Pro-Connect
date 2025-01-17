import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import AppDonwload from '../components/AppDonwload'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <JobListing/>
      <AppDonwload/>
      <Footer/>
    </div>
  )
}

export default Home
