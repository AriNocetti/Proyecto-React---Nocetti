import React from 'react'
import CounterContainer from '../../common/counter/CounterContainer'

const ItemDetail = ({ item, onAdd, totalItems }) => {
  return (
    <div style={{ marginLeft: "40px", marginTop: "20px" }}>
        <h1>{item.title}</h1>
        <img src={item.imageUrl} alt="producto" style={{maxHeight: "350px", width: "auto"}} />
        <h2>{item.descrption}</h2>
        <h2>$ {item.price}</h2>

        <CounterContainer 
          onAdd={onAdd}
          stock={item.stock}
          totalItems={totalItems}
        />
    </div>
  );
};

export default ItemDetail;
