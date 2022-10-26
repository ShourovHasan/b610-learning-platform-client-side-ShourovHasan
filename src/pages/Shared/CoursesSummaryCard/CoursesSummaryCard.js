import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaStar, FaEye, FaFilePdf, FaRegFilePdf } from "react-icons/fa";
import './CursesSummaryCard.css';
import { Button } from 'react-bootstrap';

const CoursesSummaryCard = ({ courses }) => {
    const { id, title, image_url } = courses;
    return (
        <div className='m-3'>
            <Card style={{ width: '18rem' }} className='w-100 course_align'>
                <Card.Img variant="top" src={image_url}/>
                <Card.Body>
                    <Card.Title style={{ height: '57px' }} className='text-center'>{title}</Card.Title> 
                    <Link className='btn btn-primary w-100' to={`/allCourses/courses/${id}`}>Details</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CoursesSummaryCard;