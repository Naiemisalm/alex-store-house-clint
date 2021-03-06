import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './ServicesItam.css'

const ServicesItam = () => {
    const [services, setServices] = useState([]);
    console.log(services)

    useEffect(() => {
        fetch('https://serene-harbor-08574.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <h3 className='text-center mt-5 mb-5'>This is avalable product</h3>
            <div className=" container row">
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