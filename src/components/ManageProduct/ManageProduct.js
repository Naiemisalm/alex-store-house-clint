import React from 'react';
import useProduct from './../../hooks/useProduct';

const ManageProduct = () => {
    const [products , setPoducts] = useProduct();

    const handleToDelete =(id)=>{
        const proceed = window.confirm('Are you sure delete your product');
        if(proceed){
            const url = (`http://localhost:5000/product/${id}`)
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
        <div>
            <h2 className='text-center mt-3'>Manage your product</h2>
            <div className='container'>
                {
                    products.map(product => <div key={product._id}>
                        <h3>{product.name} <button className='ml-5' onClick={ () =>{handleToDelete(product._id)}}>Delete</button></h3>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;