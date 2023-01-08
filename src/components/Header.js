import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { DataContext } from "./DataProvider";
import { AuthContext } from '../Features/AuthContext';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";

export default function Header(props) {
    const [menu, setMenu] = useState(false);
    const value = useContext(DataContext);
    const [cart] = value.cart;
    const {currentUser} = useContext(AuthContext);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    const styles = {
        largeIcon: {
            width: 28,
            height: 28
        },
        styleMenu: {
            top: menu ? 0 : "-100%",
            backgroundColor: "#2b6777"
        }
    };

    const handleChange = event => {
        props.setSearch(event.target.value);
    };

    return (
        <header>
            <div className="logo">
                <h1><Link to="/">Buy&Sell</Link></h1>
            </div>

            <form action="#" autoComplete="off">
                <input type="text" id="input-search" name="search" placeholder="Search..." onChange={handleChange} />
            </form>
            
            <ul style={styles.styleMenu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                {currentUser?<li onClick={()=>signOut(auth)}><a href='/'>Logout</a></li>: <li><Link to="/login">Login/Register</Link></li>}
                <li onClick={toggleMenu}>
                    <img src='cross.png' alt="close-menu" width="30" className="menu" />
                </li>
            </ul>

            <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to="/cart">
                    <ShoppingCartIcon style={styles.largeIcon} className="menu"></ShoppingCartIcon>
                </Link>
            </div>

            <div className="menu" onClick={toggleMenu}>
                <img src="menu.svg" alt="menu" width="30" />
            </div>

        </header>
    )
}