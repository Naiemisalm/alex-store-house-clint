import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetels = () => {
    const {serviceId} = useParams();
    const [product, setProduct] = useState({});
    useEffect( ()=>{
        const url = `http://localhost:5000/product/${serviceId}`
        fetch(url)
        .then(res=>res.json())
        .then(data => setProduct(data));

    },[])
    return (
        <div>
            <h1 className='text-center mt-5'>{product.name}</h1>
            <div className='text-center'>
                <Link to="/cheackout">
                    <button className='btn btn-primary mt-5'>Delivered</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetels;