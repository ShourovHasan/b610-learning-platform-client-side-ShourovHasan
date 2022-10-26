import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaShareAlt, FaRegBookmark, FaStar, FaEye, FaFilePdf, FaRegFilePdf } from "react-icons/fa";
import './CursesSummaryCard.css';

const CoursesSummaryCard = ({ courses }) => {
    const { id, title, course_price, students, teacher, details, image_url, rating, total_view } = courses;
    console.log(courses);
    return (
        <div>
            <Card className="mb-3 m-auto">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image className='me-2' roundedCircle style={{ height: '60px' }} src={teacher?.img} alt="" />
                        <div>
                            <p className='m-0 p-0'>{teacher?.name}</p>
                            <p className='m-0 p-0'>{teacher?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegFilePdf className='display-6 text-danger'></FaRegFilePdf>
                    </div>
                </Card.Header>

                <Card.Body>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <Card.Img className='h-50' variant="top" src={image_url} />
                    <Card.Text className='pt-2 text_justify'>
                        {
                            details.length > 250 ?
                                <>{details.slice(0, 250) + '...'} <Link className='link' to={`/allCourses/courses/${id}`}>Read more</Link></>
                                :
                                <>{details}</>
                        }
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
        </div>
    );
};

export default CoursesSummaryCard;