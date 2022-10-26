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
    return (
        <div>
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
                        
                        <Card.Text className='pt-2 text_justify'>
                            <strong>Description: </strong> {details}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                        <div className='d-flex align-items-center'>
                            <FaStar className='text-warning me-1'></FaStar>
                            <span>{rating?.number}</span>
                        </div>
                        <div>
                            <FaEye></FaEye>
                            <span className='ms-1'>{total_view}</span>
                        </div>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    );
};

export default Courses;