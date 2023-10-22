import React from 'react'
import '../Styles/Hero.css'
import bus from '../Assets/bus.jpg'
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <div className="hero">
          <img className="busname" src={props.heroImg} alt="bustravel" />
          <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>
              {props.buttonText}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero