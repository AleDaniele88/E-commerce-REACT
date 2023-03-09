import './App.css'
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import Navbar from './components/Navbar/navbar'
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Item from './components/Item/item';
import ItemCategoryContainer from './components/ItemCategoryContainer/itemCategoryContainer';


function App() {
  
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductos(json))
  }, [])
  
  
  return (
    <div>
      <header>
          <h1 className="titulo">La web del chocolate</h1>
          <div className="cartWidget">
            <Badge badgeContent={1} color="primary">
              <ShoppingCartIcon color="white" />
            </Badge>
          </div>  
        <Navbar />
      </header>
      <main>
        <section className="section">
        <h2>Categorías</h2>
        <div>
          <Link to="/category/men's clothing"><p>Vestimenta de hombre</p></Link>
          <Link to="/category/women's clothing"><p>Vestimenta de mujer</p></Link>
          <Link to='/category/jewelery'><p>Joyas</p></Link>
          <Link to='/category/electronics'><p>Electrónica</p></Link>
        </div>
          <Routes>
            <Route path='/' element={<p>Home</p>}/>
            <Route path='/productos' element={<ItemListContainer productos={productos} />}/>
            <Route path='/productos/:id' element={<Item productos={productos} />}/>
            <Route path='*' element={<h3>Error 404</h3>}/>
            <Route path='/category/:categoryId' element={<ItemCategoryContainer productos={productos} />}/>
          </Routes>
        </section>
      </main>
      
    </div>
  )
}

export default App
