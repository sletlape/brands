import React from 'react';
import '../styles/Menu.css';
import logo from '../assets/logo.svg';

const Menu = () => {
    return (
        <nav className="menu" style={{ backgroundColor: 'var(--primarydark)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
            <div className="menu-left">
                <img src={logo} alt="Logo" style={{ width: '64px', height: '64px' }} />
            </div>
            <div className="menu-center">
                <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem' }}>
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
