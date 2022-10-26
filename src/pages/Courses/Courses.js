import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaShareAlt, FaRegBookmark, FaStar, FaEye, FaFilePdf, FaRegFilePdf } from "react-icons/fa";
import './Courses.css';

const Courses = () => {
    const allCourses = useLoaderData();
    const { id, title, course_price, students, teacher, details, image_url, rating, total_view } = allCourses;

    console.log(allCourses);
    return (
        <div className='my-4'>
            <Container>
                <Card className="m-2 card_container">
                    <Card.Header className='d-flex justify-content-between align-items-center bg-white'>
                        <div className='d-flex'>
                            <Card.Title className='text-center mt-2'>{title}</Card.Title>
                        </div>
                        <div>
                            <FaRegFilePdf className='display-6 text-danger'></FaRegFilePdf>
                        </div>
                    </Card.Header>

                    <Card.Body className='course_container'>
                        <Card.Img className='p-0 m-0' variant="top" src={image_url} />
                        <h5 className='pt-2'>Course Description:</h5> <hr className='m-0 py-1'/>
                        <Card.Text className='text_justify'>
                            {details}              
                        </Card.Text>
                        <div>
                            <h5 className='mt-3'>Course Information:</h5> <hr className='m-0 py-1' />
                            <ul>
                                <li>
                                    <strong>Instructor: {teacher?.name}</strong>
                                </li>
                                <li>
                                    <strong>Enrolled Students: {students?.number}</strong>
                                </li>
                                <li>
                                    <strong>Price: {course_price} tk</strong>
                                </li>
                                <li>
                                    <strong>Published: {teacher?.published_date}</strong>
                                </li>
                                <li>
                                    <strong>Rating: {rating?.number}</strong>
                                </li>
                            </ul>
                        </div>
                    </Card.Body>
                    <Link className='btn btn-primary w-50 mb-2 m-auto display-5' to={`/allCourses/courses/checkout/${id}`}>Get premium access</Link>
                </Card>
            </Container>
        </div>
    );
};

export default Courses;