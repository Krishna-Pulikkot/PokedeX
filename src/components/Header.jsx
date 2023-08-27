import React from 'react';
import { Link } from "react-router-dom";



const Header = () =>{
    return (
    <div className="header-div">
        <Link to="/">
        <div className="header-logo">
        <p>🔴PokedeX⚪</p>
        </div>
        </Link>
        
        <ul className ="header-nav">
            <li><Link to="/" className="header-link">Home</Link></li>
            <li><Link to="/connect" className="header-link">Connect</Link></li>
        </ul>
    </div>
    );
}

export default Header;