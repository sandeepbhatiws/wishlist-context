import React, { createContext, useState } from 'react';
const Context = createContext();

export default function MainContext(props) {
    const [cart, setCart] = useState([]);

    const addToCart = (pId) => {
        if (!cart.includes(pId)) {
            setCart([...cart, pId]);
        }
    }
    const removeFromCart = (pId) => {
        setCart(
            cart.filter((id) => {
                return id != pId
            })
        )
    }

    return (
        <Context.Provider value={{ cart,removeFromCart, addToCart }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context };