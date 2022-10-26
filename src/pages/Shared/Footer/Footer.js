import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-light text-center d-flex align-items-center' style={{height: '60px'}}>
            <Container>
                <p>Copyright @2022. All Rights Reserved by <strong>AIUB Portal</strong></p>
            </Container>
        </div>
    );
};

export default Footer;