import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card/card'
import ItemListContainer from '../ItemListContainer/itemListContainer'

const ItemCategoryContainer = ({productos}) => {

const {categoryId} = useParams()

const categoryFilter = productos.filter((producto) =>producto.category == categoryId)


  return (
    <div>
        <ItemListContainer productos={categoryFilter}/>
        {/* {categoryFilter.map((producto)=>
            <Card key={producto.id} producto={producto}/>
        )} */}
    </div>
  )
}

export default ItemCategoryContainer