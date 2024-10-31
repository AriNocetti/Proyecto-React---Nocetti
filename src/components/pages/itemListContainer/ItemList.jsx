import { Skeleton } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {

    if (items.length === 0) {
        return (
            <>
                <Skeleton variant="rectangular" width={"300px"} height={"150px"}/>
                <Skeleton variant="text" sx={{ fontSize: "4rem" }} width={"200px"}/>
                <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={"150px"}/>
                <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={"100px"}/>
                <Skeleton
                    variant="rounded"
                    sx={{fontSize: "2rem", borderRadius: "50px"}}
                    width={"100px"}
                />
            </>
        );
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
                marginTop: "50px",
            }}
        >
            {items.map((item) => {
                return <ProductCard key={item.id} {...item} />;
        })}
        </div>
    );
};

export default ItemList;
