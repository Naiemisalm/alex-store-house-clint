import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './ServicesItam.css'

const ServicesItam = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <h3 className='text-center mt-3'>This is avalable product</h3>
            <div className="row">
                {
                    services.map(service =>  <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                    
                }
            </div>

        </div>
    );
};

export default ServicesItam;