import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Register = () => {
    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/login')
    }

    const [
        createUserWithEmailAndPassword,
        user,
        
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}  </p>
    }

    const [updateProfile, updating] = useUpdateProfile(auth);

    if (user) {
        console.log(updating)

    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')

        if (user) {
            navigate('/home')
        }
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className='text-center text-primary'>Please Register!!!</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
             
            </Form>
            <p>{errorElement}</p>
            <p>Alex store house have an alredey account <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Login</Link> </p>
            <div>
                <GoogleLogin></GoogleLogin>
            </div>

        </div>
    );
};

export default Register;