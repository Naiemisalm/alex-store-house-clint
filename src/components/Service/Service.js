import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, discription, stock, img, price,quantity, _id } = service;
    const navigate = useNavigate()

    const handeleService = id =>{
        navigate(`/service/${id}`);
    }

    return (
        <div className=' g-5 col-sm-12 col-md-6 col-lg-4'>
            <div id='experts' className="card " style={{ width: "18rem" }}>
                <img src={img} class="card-img-top"  alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p>Price:${price}</p>
                    < p className="card-text">{discription.slice(0, 40) + " read more..."}</p>
                    <p> Quantity: {quantity}</p>
                    <p>stock:{stock}</p>
                    <button onClick={() =>{handeleService(_id)}} className='btn btn-primary'>Book : {name}</button>
                </div>
            </div>

        </div>
    );
};

export default Service;