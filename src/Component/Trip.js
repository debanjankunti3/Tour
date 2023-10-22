import React from 'react'
import '../Styles/Trip.css'
import Tripdata from './Tripdata'
const img1="https://source.unsplash.com/random/?indonesia/"
const img2="https://source.unsplash.com/random/?India/"
const img3="https://source.unsplash.com/random/?Australia/"
function Trip() {
  return (
    <>
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destination using google map.</p>
        <div className="tripcard">
            <Tripdata image={img1} heading='Trip in Indonesia' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores corrupti odio est excepturi possimus ut necessitatibus placeat hic cum, vel numquam rem ipsa, commodi ipsum'/>
            <Tripdata image={img2} heading='Trip in India' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores corrupti odio est excepturi possimus ut necessitatibus placeat hic cum, vel numquam rem ipsa, commodi ipsum'/>
            <Tripdata image={img3} heading='Trip in Australia' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores corrupti odio est excepturi possimus ut necessitatibus placeat hic cum, vel numquam rem ipsa, commodi ipsum'/>
        </div>
    </div>
    </>
  )
   
}

export default Trip