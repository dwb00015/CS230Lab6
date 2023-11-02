import React from 'react';
import "./Navbar.css";

function Navbar(){
    return(
        <nav>
            <h1>Navbar</h1>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </div>
        </nav>
    );
}

export default Navbar;