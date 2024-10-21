import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCart = () =>{
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addCarrito = (pizza) => {
        const existingPizza = cartItems.find(item => item.id === pizza.id);
        if(existingPizza){
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === pizza.id ? { ...item, quantity: item.quantity + 1} : item
                )
            );
        }
        else{
            setCartItems(prevItems => [...prevItems, { ...pizza, quantity: 1 }]);
        }
    };

    const aumentarCantidad = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id? { ...item, quantity: item.quantity +1 } : item
            )
        );
    };

    const disminuirCantidad = (id) =>{
        setCartItems(prevItems =>
            prevItems
                .map(item => 
                    item.id === id 
                        ? { ...item, quantity: item.quantity - 1 } 
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    const removerCarrito = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const value = {
        cartItems,
        addCarrito,
        aumentarCantidad,
        disminuirCantidad,
        removerCarrito,
        getTotal,
    };

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};