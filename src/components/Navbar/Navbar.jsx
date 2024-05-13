import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import Search from '../Search/Search';

const Navbar = ({ setShowLogin }) => {
    
    const [menu, setMenu] = useState("home");
    
    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <Link to='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</Link>
                <Link to='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</Link>
                <Link to='footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</Link>
            </ul>
            <div className="navbar-right">
                <img onClick={<Search />} src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>sign in</button>
            </div>
        </div>
    );
};

export default Navbar;
