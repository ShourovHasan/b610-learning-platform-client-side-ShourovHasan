import React from 'react';
import { Image } from 'react-bootstrap';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className='pageNotFound'>
            <Image src='404.jpg'></Image>
        </div>
    );
};

export default PageNotFound;