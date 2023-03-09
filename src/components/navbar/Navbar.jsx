
import { Link } from 'react-router-dom'
import './navbar.css'


const Navbar = () => {
  return (
    <nav>
        <ul className="nav__ul">
            <Link to='/'><li className='nav__li'><p>Home</p></li></Link>
            <Link to='/productos'><li className='nav__li'><p>Productos</p></li></Link>
            <Link to='*'><li className='nav__li'><p>FAQs</p></li></Link>
            <Link to='*'><li className='nav__li'><p>Contactanos</p></li></Link>
        </ul>
    </nav>
  )
}

export default Navbar