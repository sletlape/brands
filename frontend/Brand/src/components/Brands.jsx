import React, { useState, useEffect } from 'react';
import '../styles/Brands.css';
// const brandLogosDir = '../assets/brandLogos/'; 

const apiUrl = 'http://localhost:3000/brands';

const Brands = () => {
    const [brandLogos, setBrandLogos] = useState([]);

    useEffect(() => {
        // Fetch image data from your backend API
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setBrandLogos(data))
            .catch((error) => console.error('Error fetching images:', error));
    }, []);

    return (
        <div className="brands">
            <p className="section-title">
                You'll be in good company
            </p>
            <h1>Trusted by leading brands</h1>
            <div className="brand-grid">
                {
                    brandLogos.length > 0 ?
                        brandLogos.map((logo) => (
                            <div className="brand-logo" key={logo.id}>
                                {/* <p>{JSON.stringify(logo)}</p> */}
                                <img src={logo.logoUrl} alt={logo.brandName} />
                                {/* <img src={'../assets/brandLogos/' + logo} alt={logo} /> */}
                            </div>
                        ))
                        : <p>Trust is something you build, give us time</p>
                }
            </div>
        </div>
    );
};

export default Brands;
