import React from 'react';
import '../styles/Brands.css';

const Brands = () => {
    const brandLogos = [
        'bbc.png',
        'blockchain.png',
        'distell.png',
        'engen.png',
        'liquid.png',
        'microsoft.png',
        'multichoice.png',
        'nike.png',
        'pnp.png',
        'sanlam.png',
        'santam.png',
        'spotify.png',
        'tfg.png',
        'tyme-bank.png',
        'visa.png',
        'wesgrow.png',
    ];

    return (
        <div className="brands">
            <span className="section-title">Trusted by leading brands</span>
            <div className="brand-grid">
                {brandLogos.map((logo, index) => (
                    <div className="brand-logo" key={index}>
                        <img src={`./assets/brandLogos/${logo}`} alt={`Brand Logo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands;
