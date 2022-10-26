import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courseCheckout = useLoaderData();
    const { id, title } = courseCheckout;
    console.log(courseCheckout);
    return (
        <div>
            <h2>{courseCheckout.title} </h2>
        </div>
    );
};

export default Checkout;