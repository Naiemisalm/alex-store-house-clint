import React from 'react';
import { useForm } from "react-hook-form";
import './UploadProduct.css'

const UploadProduct = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = (`https://serene-harbor-08574.herokuapp.com/product`);
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result=>{
            console.log(result);
        })

    }


    return (
        
        <div className=' container '>
            <h2 className='text-center mt-5'>Upload porduct</h2>
            
            <div className='w-50 mx-auto mt-5 mb-5 deign'>

                <form className=' d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className=' mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='mb-3' placeholder='Discription' {...register("discription", )} />
                    <input className='mb-3' placeholder='Photo Url' type ="text" {...register("img")} />
                    <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
                    <input className='mb-3' placeholder='Suplayer' type="text" {...register("suplayer")} />
                    <input className='w-25 mx-auto' type="submit" value="Upload Product" />
                </form>
            </div>
        </div>

    );
};

export default UploadProduct;