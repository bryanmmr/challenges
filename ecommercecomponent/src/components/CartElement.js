import { useState } from "react"
import { useCart } from "../CartContext";

const CartElement = ({cartElement}) => {
    const [quantity, setQuantity] = useState(1);
    const {cart, setCart} = useCart();
    const addDish = () => {
        setQuantity(quantity+1)
        setCart(cart.map( element => element.id === cartElement.id?{...cartElement, qty: quantity+1}:element))
    }
    const reduceDish = () => {
        setQuantity(quantity-1)
        setCart(cart.map( element => element.id === cartElement.id?{...cartElement, qty: quantity-1}:element))
    }
    return(
        <div className="cart__element" key={cartElement.id}>
            <div className="cart__element--image">
                <img src={cartElement.image} alt={cartElement.name} />
            </div>
            <div className="cart__element--left">
                <div className="cart__element--title">{cartElement.name}</div>
                <div className="cart__element--uprice">${cartElement.price}</div>
                <div className="cart__element--qprice">
                    <div className="cart__element--qty">
                        <button className="cart__element--button" onClick={reduceDish} disabled={quantity===1}>{`<`}</button>
                        <div className="cart__element--quantity">{quantity}</div>
                        <button className="cart__element--button" onClick={addDish}>{`>`}</button>
                    </div>
                    <div className="cart__element--tprice">${(quantity*cartElement.price).toFixed(2)}</div>
                </div>
            </div>
        </div>
    )
}

export default CartElement