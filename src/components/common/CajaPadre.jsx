import React from "react";

const CajaPadre = ({ children }) => {
    return (
        <div style={{border: "2px solid red"}}>
            <h2>Aca el título</h2>
            {children}
            <h2>Aca el footer</h2>
        </div>
    );
};

export default CajaPadre;