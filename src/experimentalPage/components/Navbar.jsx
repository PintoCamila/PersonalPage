import React, { Component, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import "D:/1/Data/Faculdade/Academia de Codigo/AFTER/PersonalPage/PersonalPage/src/experimentalPage/styles/navbar.css"

 const Navbar = () => {

    const[menuOpen, setMenuOpen] = useState(false);
        return (
            <nav>
                <Link to="/" id="home">Home</Link>
                <div id="menu" onClick={() => {
                   setMenuOpen(!menuOpen); 
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
export default Navbar;