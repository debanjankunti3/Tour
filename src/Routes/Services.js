import React from 'react'
import Hero from '../Component/Hero'
// import Navbar from '../Component/Navbar'
import services from '../Assets/services.jpg'
import services2 from '../Assets/services2.jpg'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Trip from '../Component/Trip'
function Services() {
  return (
    <>
    <Navbar/>
     <Hero
        cNAme=".hero-mid" heroImg={services2} title="Learn About Us" text="Get The World Class Srvices From Our Team" url="/" buttonText="tour now" btnClass="show" />
        <Trip/>
        <Footer/>
    </>
  )
}


export default Services