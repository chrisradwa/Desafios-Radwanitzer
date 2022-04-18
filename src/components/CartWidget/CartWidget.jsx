import carrito from '../../assets/img/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <img id='imgCarrito' src={carrito}/>
            0
        </div>
    )
}

export default CartWidget;