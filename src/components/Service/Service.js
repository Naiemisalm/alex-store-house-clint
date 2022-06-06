import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, discription, stock, img, price, quantity, _id, suplayer } = service;
    const navigate = useNavigate()

    const handeleService = id => {
        navigate(`/service/${id}`);
    }

    return (

        <div className='containet '>
            <div className='design mb-3'>
                <div id='experts' className="card " style={{ width: "18rem" }}>
                    <img src={img} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <p>Price:${price}</p>
                        < p className="card-text">{discription}</p>
                        <p> Quantity: {quantity}</p>
                        <p>Suplayer: {suplayer}</p>
                        <p>stock:{stock}</p>
                        <button onClick={() => { handeleService(_id) }} className='btn btn-primary'>Book : {name}</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;
//   const handleDeliverd = () =>{

//       const newQuantity = parseInt(quantity)-1;
//       const makeQuantity = {newQuantity}
//       console.log(quantity);

//       const url =(`https://serene-harbor-08574.herokuapp.com/product/${_id}`)
//         fetch(url, {
//             method:"PUT",
//             headers:{
//                 'content-type': 'applicatiion/json'
//             },
//             body:JSON.stringify(makeQuantity)
//         })
//         .then(res=>res.json())
//         .then(data=>{
//             console.log(data)
//             alert('quantity update')
//         })
//     }
