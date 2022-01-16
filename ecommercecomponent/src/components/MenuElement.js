import { useCart } from "../CartContext";
import { useState } from "react";
const MenuElement = ({menu}) => {
    const [buttonText, setButtonText] = useState(0);
    const {cart, setCart} = useCart();
    const addToCart = () => {
        setCart([...cart, {...menu, "qty":1}])
        setButtonText(1)
    }
    return (
    <div className="menu__element">
        <div className="menu__element--image">
            <img src={menu.image} alt={menu.name} />
        </div>
        <div className="menu__element--side">
            <div className="menu__element--title">{menu.name}</div>
            <div className="menu__element--price">$ {menu.price}</div>
            <button className="menu__element--add" onClick={addToCart} disabled={buttonText}>{buttonText?`In Cart`:`Add to Cart`}</button>
        </div>
    </div>
    )
}

export default MenuElement