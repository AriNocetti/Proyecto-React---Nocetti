import React, {useContext} from "react";
import Cart from "./Cart";
import {CartContext} from "../../../context/CartContext";

const CartContainer = () => {
    const {cart, clearCart, deleteProductById, getTotalAmount} =
        useContext(CartContext);

    let total = getTotalAmount();

    return (
        <Cart
            cart={cart}
            clearCart={clearCart}
            deleteProductById={deleteProductById}
            total={total}
        />
    );
};

export default CartContainer;