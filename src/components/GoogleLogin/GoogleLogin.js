import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }

    if (user) {
        navigate('/home')
    }
    return (
        <div >
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div>
                {errorElement}
                <button onClick={() => { signInWithGoogle() }} className='btn btn-info d-block mx-auto w-50 my-2'>
                    <span className='px-2'> Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;