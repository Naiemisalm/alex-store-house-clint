import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className=' mt-5 bg-dark text-white p-5 d-flex'>
            <div className='col-4'>
                <h4> INFORMATION </h4>
                <p>About us <p>Delivary information<p> Privacy Policy</p></p></p>
            </div>
            <div className='col-4'>
            <p><small>copyright @ {year} </small></p>
            </div>
            <div className='col-4'>
            <h4> CONTACT US</h4>
            <p>phone<p>01704487171</p></p>
            <p>Email<p>nayemislam30964@gmail.com</p></p>
            
            </div>
        </footer>
    );
};


export default Footer;