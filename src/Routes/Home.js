import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import bus from '../Assets/bus.jpg'
import Destination from '../Component/Destination'
import Trip from '../Component/Trip'
import Footer from '../Component/Footer'
function Home() {
  return (
    <>
    <Navbar/>
    <Hero
    cNAme="hero" heroImg={bus} title="Your Journey Begins Here" text="Choose Your Destionation And Fulifill Your Dream Travel"  url="/" buttonText="tour now" btnClass="show"/>
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  )
}

export default Home