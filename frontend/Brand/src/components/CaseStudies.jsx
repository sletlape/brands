import React from 'react';

import '../styles/CaseStudies.css';

import caseStudy1 from '../assets/olimpian.png'
import caseStudy2 from '../assets/savings.png';
import caseStudy3 from '../assets/skhokho.png';

/**
 * 
 * @returns {JSX.Element}
 * Renders a list of case studies.
 * Each case study has a title, description, and image.
 * The image in the case study is its background image.
 */

const CaseStudies = () => {
    const caseStudies = [
        {
            title: 'The Olympian',
            description: 'The only athlete in the world to do ber Olympic routine in 2020.',
            image: caseStudy1,
        },
        {
            title: 'The Savings Jar',
            description: 'Grow your savings treasuer and grow your dragon.',
            image: caseStudy2,
        },
        {
            title: 'Skhokho seMali',
            description: 'Helping South Africans become #CashCleva with Skhokho seMali',
            image: caseStudy3,
        },
    ];

    return (
        <div className="case-studies">
            <p className="section-title">Case Studies</p>

            <div className="case-study-list">
                    {caseStudies.map((caseStudy, index) => (
                        <div className="case-study" key={index}>
                            <img src={caseStudy.image} alt={`Case Study ${index + 1}`} />

                            <div className="case-study-info">
                                <h3 className="case-study-title">{caseStudy.title}</h3>
                                <p className="case-study-description">{caseStudy.description}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CaseStudies;