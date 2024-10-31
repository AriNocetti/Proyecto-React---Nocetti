import { Button } from "@mui/material";

const Counter = ({ contador, sumar, restar, onAdd }) => {
    return (
        <div style={{marginLeft: "50px", marginTop: "30px", display: "flex", alignItems: "center", gap: "10px"}}> 
            <Button variant="contained" onClick={sumar}>
                Sumar
            </Button>
            <h1>{contador}</h1>
            <Button variant="contained" onClick={restar}>
                Restar
            </Button>

            <Button variant="outlined" onClick={() => onAdd(contador)}>
                Agregar al carrito
            </Button>
        </div>
    );
};

export default Counter;
