import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

const Card = ({producto}) => {
  return (
    <Link to={`${producto.id}`}>
    <div className="cardStyle">
        <h4>{producto.title}</h4>  
        <img src={producto.image} alt="" />  
        <p>Precio: ${producto.price}</p>
    </div>
    </Link>
  )
}

export default Card