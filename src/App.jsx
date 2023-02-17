import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/navbar/Navbar'
import { Badge, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function App() {
  

  return (
    <div>
      <header>
        <div className="header__div">
          <img src="" alt="" />
          <h1 className="titulo">La web del chocolate</h1>
          <Badge badgeContent={1} color="primary">
            <ShoppingCartIcon color="white" />
          </Badge>
        </div>
        <Navbar />
      </header>
      <main>
        <section className="section">
          <ItemListContainer greeting="Hola" />
        </section>
      </main>
      
    </div>
  )
}

export default App
