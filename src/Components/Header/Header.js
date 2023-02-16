import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="link">
                    <NavLink to={'/'} className={({ isActive }) =>
                        isActive ? 'active' : undefined
                    }>Home</NavLink>
                    <NavLink to={'/order'} className={({ isActive }) =>
                        isActive ? 'active' : undefined
                    }>Order</NavLink>
                    <NavLink to={'/inventory'} className={({ isActive }) =>
                        isActive ? 'active' : undefined
                    }>Inventory</NavLink>
                    <NavLink to={'/login'} className={({ isActive }) =>
                        isActive ? 'active' : undefined
                    }>Login</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;