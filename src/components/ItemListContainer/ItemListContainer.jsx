
import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/card'
import './itemListContainer.css'

const ItemListContainer = ({productos}) => {
  return (
    <>
      <section>
        <div className='productos'>
        {productos.map((producto)=><Card key={producto.id} producto={producto}/>)}
        </div>
      </section>
    </>
  )
}

export default ItemListContainer
