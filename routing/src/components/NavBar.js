import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = () => {
    return (
        <nav className="nav-style">
            <ul>
                <li><NavLink exact to='/' activeClassName="visible">Home</NavLink></li>
                <li><NavLink activeStyle={{ fontWeight: 'bold', color: 'red' }} to='/about'>About</NavLink></li>
                <li><NavLink to='/projects'>Porjects</NavLink></li>
            </ul>
        </nav>
    )
}

export default navbar;