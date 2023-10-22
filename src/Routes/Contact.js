import React from 'react'
import Hero from '../Component/Hero'
import contact from '../Assets/contact.jpg'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Contactform from '../Component/Contactform'
function Contact() {
  return (
    <>
    <Navbar/>
     <Hero
        cNAme=".hero-mid" heroImg={contact} title="Contact Us " text="Got Any Query Feel Free To Contact Us" url="/" buttonText="tour now" btnClass="show" />
        <Contactform/>
        <Footer/>
    </>
  )
}

export default Contact