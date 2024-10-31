import {useState} from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { categories } from "./categories";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true);
    const toggleMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={"container-nav"}>
            <Link to="/"> 
            <h2>Aritti</h2>
        </Link>
            <ul>
                {categories.map(({title, path}) => (
                    <Link key={title} to={path}>
                        {title}
                    </Link>
                ))}
            </ul>

            <Link to="/cart">
                <CartWidget />
            </Link>
        </div>
    );
};

export default Navbar;