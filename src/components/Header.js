import React, { useState } from 'react';
import logo from '../Images/era logo.png'; // Corrected path


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div id="header">
            <div className="container">
                <nav>
                    <img src={logo} className="logo" alt="Logo" />
                    <ul id="sidemenu" style={{ right: menuOpen ? '0' : '-200px' }}>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <i className="fas fa-times" onClick={closeMenu}></i>
                    </ul>
                    <i className="fas fa-bars" onClick={openMenu}></i>
                </nav>
                <div className="header-text">
                    <p>Developer</p>
                    <h1>Hi, I'm <span>Eranda</span> Abewardhana</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;
