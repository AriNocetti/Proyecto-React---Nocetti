import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        let existe = cart.some((elemento) => elemento.id === product.id);

        if (existe) {
            let nuevoArray = cart.map((elemento) => {
                if (elemento.id === product.id) {
                    return { ...elemento, quantity: product.quantity};
                } else {
                    return elemento;
                }
            });
            setCart(nuevoArray);
        } else {
            setCart([...cart, product]);
        }
    };

    const deleteProductById = (id) => {
        let arrayFiltrado = cart.filter((product) => product.id !== id);
        setCart(arrayFiltrado);
    };

    const getTotalAmount = () => {
        let totalCarrito = cart.reduce((acc, product) => {
            return acc + product.price * product.quantity;
        }, 0);
        return totalCarrito;
    };

    const getTotalItems = () => {
        let totalItems = cart.reduce((acc, product) => {
            return acc + product.quantity;
        }, 0);

        return totalItems;
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalQuantityById = (id) => {
        let product = cart.find((element) => element.id === id);
        return product ? product.quantity : 1;
    };

    let data = {
        cart, 
        addToCart,
        clearCart,
        deleteProductById,
        getTotalAmount,
        getTotalItems,
        getTotalQuantityById,
    };
    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};