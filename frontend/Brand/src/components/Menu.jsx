import React, { useState } from 'react';
import '../styles/Menu.css';
import logo from '../assets/logo.svg';
import BurgerMenu from './BurerMenu';

const Menu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="menu">
            <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <div className="menu-left">
                <img src={logo} alt="Logo" style={{ width: '64px', height: '64px' }} />
            </div>
            <div className={`menu-center ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#services" style={{ color: 'white' }}>Services</a></li>
                    <li><a href="#industries" style={{ color: 'white' }}>Industries</a></li>
                    <li><a href="#cases" style={{ color: 'white' }}>Cases</a></li>
                    <li><a href="#contact" style={{ color: 'white' }}>Contact</a></li>
                </ul>
            </div>
            <div className="menu-right">
                <button className="button is-primary">Let's Talk</button>
            </div>
        </nav>
    );
};

export default Menu;
