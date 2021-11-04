import React from "react";
import "../App.css";
import logo from "./img/logo.png"
import {Link} from 'react-router-dom';


const Menu = () => {
    return(
    <nav className="navBar">
        <img id="logo" src={logo} alt="logo"/>
        <Link id="linkHome" to='/select'>Home</Link>
    </nav>
    )
}

export default Menu;

