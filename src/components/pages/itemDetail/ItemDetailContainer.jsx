import React, { useContext, useEffect, useState } from "react";
import ItemDetail from './ItemDetail'
import { products } from '../../../productsMock';
import { useParams, useNavigate } from "react-router-dom";
import {CartContext} from "../../../context/CartContext";
import Swal from "sweetalert2";
import {toast} from "sonner";
import {collection, doc, getDoc} from "firebase/firestore";
import {db} from "../../../configFirebase";

const itemDetailContainer = () => {
  const [item, setItem] = useState({});
  const {addToCart, getTotalQuantityById} = useContext(CartContext);

  const {id} = useParams();

  let totalItems = getTotalQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(db, "producto");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc).then((res) => {
      setItem({ ...res.data(), id: res.id});
    });
  }, [id]);

  const onAdd = (quantity) => {
    let productoParaElCarrito = { ...item, quantity};
    addToCart(productoParaElCarrito);

    toast.success("Se ha agregado tu producto", {
      closeButton: true,
      description: "Quieres algo más?",
      position: "top-center",
    });
  };

  return <ItemDetail item={item} onAdd={onAdd} totalItems={totalItems} />;
};

export default itemDetailContainer;