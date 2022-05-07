import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

const ServiceDetels = () => {
    const { serviceId } = useParams();
    const [product, setProduct] = useState({});
  
    useEffect(() => {
        const url = `http://localhost:5000/product/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, []);

 
    return (
        <div className="col-lg-4 container mt-5 d-flex">
            <div className='mb-5'>
            <img className=' mb-5 w-100 h-60'  src={product.img}  alt="" />
            </div>
           <div>
           <h2 className='fs-2 fw-bold'>{product.name}</h2>
            <p className='fs-4'>{product.discription}</p>
            <p className='fs-3'>Price:${product.price}</p>
            <p className='fs-3'>suplayer Name: {product.suplayer}</p>

            <p className='fs-3'>Quantity:{product.quantity}</p>
            <button  className='btn btn-primary'>Delivered</button>
           </div>
        </div>
    );
};

export default ServiceDetels;