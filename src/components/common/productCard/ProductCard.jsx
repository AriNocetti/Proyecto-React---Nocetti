import {
    Button, 
    Card, 
    CardActions,
    CardContent, 
    CardMedia, 
    Typography,
} from "@mui/material";
import {Link} from "react-router-dom";

const ProductCard = ( {title, price, imageUrl, description, id}) => {
    return (
            <Card sx={{ width: 250, height: 400 }}>
            <CardMedia sx={{height : 240, width: '100%', objectFit: 'cover'}} image={imageUrl} title="producto"/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {description}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {price}
            </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/productDetail/${id}`}>
                    <Button variant="outlined" size="small">
                        Ver detalle
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default ProductCard;