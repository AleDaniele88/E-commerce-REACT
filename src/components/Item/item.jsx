import React from 'react'
import { useParams } from 'react-router-dom'
import '../Card/card.css'



const Item = ({productos}) => {
    const {id} = useParams()
    const producto = productos.find((producto)=>producto.id == id)

  return (
    <div className="cardStyle">
        <h4>{producto.title}</h4>  
        <h5>{producto.category}</h5>
        <img src={producto.image} alt="" />  
        <p>{producto.description}</p>
        <p>Precio: ${producto.price}</p> 
    </div>
  )
}

export default Item