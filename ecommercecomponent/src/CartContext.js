import React, {useContext, useState} from 'react';

const CartContext = React.createContext()

export const CartProvider = (props) => {
    const [cart, setCart] = useState([])
    const {children} = props
    const propsToPass = {
        cart,
        setCart,
    }
    return (
        <CartContext.Provider value={propsToPass}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if(context === undefined){
        throw new Error('Error')
    }
    return context
}