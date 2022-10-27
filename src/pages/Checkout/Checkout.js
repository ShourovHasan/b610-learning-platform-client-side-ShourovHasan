import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import toast from 'react-hot-toast';


const Checkout = () => {
    const courseCheckout = useLoaderData();
    const { id, title, course_price } = courseCheckout;
    
    // console.log(courseCheckout);

    const handleConfirmCheckout = () => {
        toast.success('Congratulations!!! You Successfully Enrolled Our Course.');
    }
    const handleCancelCheckout = () => {
        toast.error('Your Cart is empty. Please you will buy this product next time!');
    }
    return (
        <div>
            <Card className='w-50 m-auto text-center'>
                <Card.Body>
                    <h2 className='text-center pb-5'>Check Out</h2>
                    <Card.Title className='text-center'>Course: {courseCheckout.title}</Card.Title>
                    <Card.Text>
                        <p>CourseId: {id}</p>
                        <p>Course Price: ${course_price}</p>
                    </Card.Text>
                    <div className='d-flex justify-content-center'>
                        <Link to='/allCourses' onClick={handleConfirmCheckout} className='btn btn-success me-2'>Confirm</Link>
                        <Link to='/allCourses' onClick={handleCancelCheckout} className='btn btn-danger'>Cancel</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Checkout;