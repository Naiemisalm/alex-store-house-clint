import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate;

    const navigateLogin = event => {
        navigate('/login');
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className='text-center text-primary'>Please Register!!!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
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
                <p>Alex store house have an alredey account <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>

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

export default Register;