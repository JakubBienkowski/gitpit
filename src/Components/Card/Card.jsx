import React from 'react'
import './Card.css'
function Card({emoji, heading, detail}) {
  return (
    <div className="card">
      
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">
            Dowiedz się wiecej
        </button>
    </div>
  )
}

export default Card