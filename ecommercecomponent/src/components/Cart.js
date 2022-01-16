import { useCart } from "../CartContext";
import CartElement from './CartElement';
import { useState, useEffect } from "react";

const Cart = () => {
    const {cart} = useCart();
    const [subTotal, setsubTotal] = useState(0)
    const reducer = (r, element) => r + element.price*element.qty
    useEffect(() => {
        setsubTotal(cart.reduce(reducer,0))
    }, [cart])
    return cart.length!==0 ? 
    (
        <>
            {cart.map(cartElement => (
                <CartElement cartElement={cartElement} />
            ))}
            
            <div className="cart__total">
                <div className="cart__total--subtotal">
                    Subtotal: $ {subTotal.toFixed(2)}
                </div>
                <div className="cart__total--tax">
                    Tax: $ {subTotal*0.0975.toFixed(2)}
                </div>
                <div className="cart__total--total">
                    Total: {(subTotal + subTotal*0.0975).toFixed(2)}
                </div>
            </div>
        </>
    ):
    (
        <div className="cart__empty">Your cart is empty</div>
    )
}
export default Cart