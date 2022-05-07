import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetetels.css'

const ServiceDetels = () => {
    
    const { serviceId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [serviceId]);

    const handleDeliverd = e => {
        const url = (`http://localhost:5000/service/${serviceId}`)
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'applicatiion/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct({ ...product, quantity: product.quantity - 1 });
                alert('quantity update')
            })
    }

    return (
        <div className="col-lg-4 container mt-5">
            <div className='mb-5 col-12'>
                <img className=' mb-5 w-100 h-60' src={product.img} alt="" />
            </div>
            <div className='col-12'>
                <h2 className='fs-2 fw-bold'>{product.name}</h2>
                <p className='fs-4'>{product.discription}</p>
                <p className='fs-3'>Price:${product.price}</p>
                <p className='fs-3'>suplayer Name: {product.suplayer}</p>

                <p className='fs-3'>Quantity:{product.quantity}</p>
                <button className='btn btn-primary' onClick={() => { handleDeliverd(product._id) }}>Delivered</button>
            </div>
        </div>
    );
};

export default ServiceDetels;