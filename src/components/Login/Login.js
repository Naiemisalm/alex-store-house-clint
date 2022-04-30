import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';




const Login = () => {
    const navigate = useNavigate;

    const navigateRegister = event => {
        navigate('/register');
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className='text-center text-primary'>Please Login!!!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>Alex store house <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>

            </Form>
            <div>
                <div className='d-flex align-items-center'>
                    <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                    <p className='mt-2 px-2'>or</p>
                    <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                </div>
                <div>
                    <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <span className='px-2'>Google Sign In</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;