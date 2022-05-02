
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const navigate =useNavigate();
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    if (loading) {
        return <p className='text-center'>loading ......</p>
    }
    
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    // const handleNavigate = () => {
    //     navigate('/home');
    // }

    console.log(user)
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5'>
            <h3 className='text-danger'> Email is not verified!!</h3>
            <h5 className='text-primary'> Verify your email address</h5>
            <button
                className='btn btn-primary'
                
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
                // onChange={handleNavigate}
            >
                Send Verification Email Again
            </button>
            
        </div>
       
    }

    return children;
};
export default RequireAuth;