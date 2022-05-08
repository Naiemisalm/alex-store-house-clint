import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from './../../hooks/useProduct';

const ManageProduct = () => {
    const [products , setPoducts] = useProduct();

    const navigate = useNavigate()
    const handleEetItam = ()=>{
        navigate('/uploadproduct')
    }

    const handleToDelete =(id)=>{
        const proceed = window.confirm('Are you sure delete your product');
        if(proceed){
            const url = (`https://serene-harbor-08574.herokuapp.com/product/${id}`)
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=> {
                console.log(data);
                const remaining = products.filter(product => product._id !== id );
                setPoducts(remaining);
            })

        }
       
    }

    return (
        <div className='w-100'>
            <h2 className='text-center mt-3'>Manage your product</h2>
            <div className='container'>
                {
                    products.map(product => <div key={product._id}>
                        <p>{product.name}  <button onClick={handleEetItam}> set itam</button> <button className='ml-5' onClick={ () =>{handleToDelete(product._id)}}>Delete</button></p>
                      
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;