import React, { useState } from "react";

const Navbar = ({  }) => {
    const [navActive, setNavActive] = useState(null);

    return (
    <div>
        <nav className="navbar">
            <div className="brand">Ahorra en tu crédito</div>
            <div 
                onClick={() => setNavActive(!navActive)}
                className={`nav__menu-bar`}
            >
                <a href="#" className="toggle-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
            </div>
            <div className={`navbar-links ${navActive ? "active" : ""}`}>
                <ul>
                    <li><a href="#">Home 1</a></li>
                    <li><a href="#">Home 2</a></li>
                    <li><a href="#">Home 3</a></li>
                </ul>
            </div>
        </nav>
    </div>
    );
};

export default Navbar;