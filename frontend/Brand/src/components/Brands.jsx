import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

import '../styles/Brands.css';

const apiUrl = 'http://localhost:3000/brands';

const Brands = () => {
    const [brandLogos, setBrandLogos] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [filterType, setFilterType] = useState(null);
    const [sort, setSort] = useState(null);

    useEffect(() => {
        fetchBrands();

    }, []);


    // Fetch image data from your backend API
    const fetchBrands = ( filter = false) => {
        let url = apiUrl;
        const params = [];
        
        if (sort)
            //Build sort query parameter
            params.push(`sort=${sort}`);
        if (filter && selectedDate)
            //Build filter query parameter
            params.push(`published=${filterType}&date=${selectedDate.toISOString()}`);
        if (params.length)
            url += '?' + params.join('&');

        fetch(url)
            .then((response) => {
                if (!response.ok)
                    throw new Error(`HTTP error, status = ${response.status}`);
                return response.json()
            })
            .then((data) => setBrandLogos(data))
            .catch((error) => console.error('Error fetching images:', error));
    };


    const handleSort = () => {
        if (sort === 'asc')
            setSort('desc');
        else
            setSort('asc');
        console.log(sort);
    };

    const handleFilterApply = () => {
        fetchBrands(true);
    };


    return (
        <div className="brands">
            <p className="section-title">
                You'll be in good company
            </p>
            <h1>Trusted by leading brands</h1>
            {
                brandLogos.length > 0 &&
                <div className="sort-filter">
                        <button onClick={handleSort}>Sort by Brand Name: {sort}</button>
                        <div className="filter-by-date">
                            <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
                            <button onClick={() => setFilterType('before')}>Before</button>
                            <button onClick={() => setFilterType('after')}>After</button>
                        </div>
                    <button onClick={handleFilterApply}>Apply</button>
                </div>
            }
            <div className="brand-grid">
                {
                    brandLogos.length > 0 ?
                        (brandLogos.map((logo) => (
                            <div className="brand-logo" key={logo.id}>
                                {/* <p>{JSON.stringify(logo)}</p> */}
                                <img src={logo.logoUrl} alt={logo.brandName} />
                                {/* <img src={'../assets/brandLogos/' + logo} alt={logo} /> */}
                            </div>
                        )))
                        : <p>Trust is something you build, give us time</p>
                }
            </div>
        </div>
    );
};

export default Brands;
