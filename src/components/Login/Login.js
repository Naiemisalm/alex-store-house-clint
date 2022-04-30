import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';





const Login = () => {
    const emailRef = useRef('');

    const navigate = useNavigate()
    const location = useLocation()


    let from = location.state?.from?.pathname || "/";


    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }


    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const hadleToLogin = event => {
        event.preventDefault();
        let email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)
        signInWithEmailAndPassword(email, password)

        if (user) {
            navigate('/home');
        }

    }

    const navigateRegister = () => {
        navigate('/register')
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
        }
    }

    return (
        <div>
            <h3 className='text-primary text-center '>Please Login</h3>
            <Form onSubmit={hadleToLogin} className='container w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>{errorElement}</p>
            <div>
                <p className='text-center'> Don't have an account <span className='text-danger' style={{ cursor: 'pointer' }} onClick={navigateRegister}> Please Register</span></p>
                <p className='text-center'>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Update Password</button> </p>

            </div>

            <div>
                <GoogleLogin></GoogleLogin>
            </div>
        </div>
    );
};

export default Login;