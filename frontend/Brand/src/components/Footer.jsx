import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <span>
                <p className="section-title">Contact us</p>
            </span>
            <div className="footer-content">
                <div className="left-section">
                    <div className="headline-section">
                        <h1>Have a project in mind?
                            <br />
                            Lets make it happen
                        </h1>
                    </div>

                    <div className="links-section">
                        <ul>
                            <li>Terms of service</li>
                            <li>Privacy policy</li>
                            <li>Impressum</li>
                        </ul>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                        <ul>
                            <li>Github</li>
                            <li>Linkedin</li>
                            <li>Teams</li>
                        </ul>
                        <ul>
                            <li>Youtube</li>
                            <li>Behance</li>
                            <li>Dribble</li>
                        </ul>
                    </div>
                </div>

                <div className="right-section">
                    <div className="address-section">
                        <p>22 Street Name, Suburb, 8000,
                            <br />Cape Town, South Africa
                            <br />+27 21 431 0001
                            <br /><u>enquirie@website.co.za</u>
                        </p>
                    </div>
                    <div className="jobs-section">
                        <a href="#">Explore open jobs</a>
                        <p>©2000—2023 Company Name</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
