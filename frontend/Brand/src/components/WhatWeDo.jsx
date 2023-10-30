import React from 'react';
import '../styles/WhatWeDo.css';
import webDev from '../assets/webDevIcon.svg';
import uxDesign from '../assets/uxIcon.svg';
import mobile from '../assets/mobileDevIcon.svg';
import blockchain from '../assets/blockchainIcon.svg';

/**
 * This component represents a section of a page that describes what the company does.
 * It renders a list of services, each with a title, description, and an associated icon.
 */

const WhatWeDo = () => {
    const services = [
        {
            title: 'Web Development',
            description: 'We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.',
            icon: webDev,
        },
        {
            title: 'User Experience & Design',
            description: 'Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.',
            icon: uxDesign,
        },
        {
            title: 'Mobile app development',
            description: 'Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.',
            icon: mobile,
        },
        {
            title: 'Blockchain solutions',
            description: 'We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.',
            icon: blockchain,
        },
    ];

    return (
        <div className="what-we-do">
            <p className="section-title">What We Do</p>
            <h1>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</h1>
            <div className="service-list">
                {services.map((service, index) => (
                    <div className="service" key={index}>
                        <img src={service.icon} alt={`Service ${index + 1}`} />
                        <h4 className="service-title">{service.title}</h4>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhatWeDo;
