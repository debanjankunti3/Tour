import React from 'react'
import travel from '../Assets/travel.jpg'
import Hero from '../Component/Hero'
import '../Styles/Hero.css'
import Navbar from '../Component/Navbar'
import '../Styles/About.css'
import Footer from '../Component/Footer'
import AboutUs from '../Component/AboutUs'

function About() {
  return (
    <>
    <Navbar/>
      <Hero
        cNAme=".hero-mid" heroImg={travel} title="Learn About Us" text="Choose Your Destionation And Fulifill Your Dream Travel" url="/" buttonText="tour now" btnClass="show" />
        <AboutUs/>
        <Footer/>
    </>
  )
}

export default About