import React from 'react';
import '../styles/Hero.css'; // Import your Hero component's CSS file
import heroImage from '../assets/hero-bg.png';

/**
 * 
 * @returns {JSX.Element}
 * Renders an image as the background of the Hero component WITH a title, text, and button.
 */

const Hero = () => {
    return (
        <div className="hero">
            {/* Background image */}
            <img className="hero-background" src={heroImage} alt="Hero background" style={{ width: '100%', height: '100%' }} />

            {/* Content container */}
            <div className="hero-content">
                <h1 className="hero-title">Live with Confidence</h1>
                <p className="hero-text">Jose Mourinho brings confidence to pan-African Sanlam campaign</p>
                <button className="button is-primary">View Project</button>
            </div>
        </div>
    );
};

export default Hero;
