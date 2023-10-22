import React from 'react'
import '../Styles/Destination.css'
import Destinationdata from './Destinationdata'
const img1="https://source.unsplash.com/random/?volcano/"
const img2="https://source.unsplash.com/random/?waterfall/"
const img3="https://source.unsplash.com/random/?eifeltower/"
const img4="https://source.unsplash.com/random/?nature/"
function Destination() {
  return (
    <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours that Give You A Opportunity to Find The Beauty Of The World</p>
        <Destinationdata
        className="first-des"
        heading='Taal Volcano,Batangar'
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, obcaecati modi ex quidem totam nam assumenda molestias, tempora, quas id nulla corrupti! Dolorem quaerat, amet sit nobis dolore tempora similique."
        image1={img1} image2={img2}
        />
        <Destinationdata
        className='first-des-reverse'
        heading='Eiffel Tower -Paris'
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, obcaecati modi ex quidem totam nam assumenda molestias, tempora, quas id nulla corrupti! Dolorem quaerat, amet sit nobis dolore tempora similique."  image1={img3} image2={img4}
        />
    </div>
  )
}

export default Destination