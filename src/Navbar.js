import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <div>
            Navbar
        </div>
    );
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Navbar;