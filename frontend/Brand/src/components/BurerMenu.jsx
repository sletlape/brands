import React, { useState } from 'react';
import '../styles/BurgerMenu.css';

/**
 * @param {boolean} isOpen - Determines whether the burger menu is open or closed.
 * @param {function} toggleMenu - Toggles the burger menu.
 * @returns {JSX.Element}
 * Renders a burger menu component made up of 3 bars.
 * The burger menu is toggled by clicking on the 3 bars.
 */

const BurgerMenu = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    );
};

export default BurgerMenu;
