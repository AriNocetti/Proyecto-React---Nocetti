import { useContext, useState } from "react";
import {CartContext} from "../../../context/CartContext";
import "./checkout.css";
import {db} from "../../../configFirebase";
import {collection, addDoc, updateDoc, doc} from "firebase/firestore";

const Checkout = () => {
    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const {cart, getTotalAmount, clearCart} = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors({
            name: "",
            phone: "",
            email: "",
        });

        if (user.name.length < 20) {
            setErrors({ ...errors, name: "La longitud no cumple"});
        };

        setIsLoading(true);

        let total = getTotalAmount();

        const order = {
            buyer: user,
            items: cart,
            total,
        };

        let refCollection = collection(db, "orders");
        addDoc(refCollection, order)
            .then((res) => {
                setOrderId(res.id);
                clearCart();
            })
            .catch((error) => {})
            .finally(() => {
                setIsLoading(false);
            });

        order.items.forEach((elemento) => {
            updateDoc(doc(db, "producto", elemento.id), {
                stock: elemento.stock - elemento.quantity,
            });
        });
    };

    const handleChange = (e) => {
        const {value, name} = e.target;
        setUser({ ...user, [name]: value});
    };

    if (isLoading) {
        return <h2>cargando...</h2>;
    }

    return (
        <div className="container">
            {orderId ? (
                <h1>Gracias por tu compra, el número de orden es: {orderId}</h1>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Nombre"
                        onChange={handleChange}
                        name="name"
                        required
                    />
                    <span>{errors.name}</span>
                    <input 
                        type="number"
                        placeholder="Teléfono"
                        onChange={handleChange}
                        name="phone"
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        required
                    />
                    <button type="submit">Comprar</button>
                </form>
            )}
        </div>
    );
};

export default Checkout;