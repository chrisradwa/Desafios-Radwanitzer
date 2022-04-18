import logo from '../../assets/img/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <img id='imgLogo' src={logo}/>
            <li><a href='#'>EQUIPOS</a></li>
            <li><a href='#'>ACCESORIOS</a></li>
            <li><a href='#'>CONTACTO</a></li>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;