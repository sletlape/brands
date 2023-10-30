import React, { useState } from 'react';
import '../styles/Menu.css';
import logo from '../assets/logo.svg';
import BurgerMenu from './BurerMenu';

/**
 * 
 * @returns {JSX.Element}
 * @constructor N/A
 * @imports BurgerMenu Component
 * @description
 * This component is the main navigation bar for the website. It contains the logo, the menu button, and the menu items.
 * The menu button is a burger menu icon that toggles the menu. 
 * The menu button is only visible on smaller screens such as mobile otherwise it is hidden and the navigation menu is shown.
 */
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
