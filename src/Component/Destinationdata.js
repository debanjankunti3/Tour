import React from 'react'
import Destination from './Destination'
import '../Styles/Destination.css'
function Destinationdata(props) {
  return (
    <>
        <div className={props.className}>
            <div className="des-text">
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>
            <div className="image">
                <img src={props.image1} alt="" />
                <img src={props.image2} alt="" />
            </div>
        </div>
    </>
  )
}

export default Destinationdata