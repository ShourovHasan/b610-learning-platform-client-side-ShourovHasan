import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import CoursesSummaryCard from '../Shared/CoursesSummaryCard/CoursesSummaryCard';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        {allCourses.title}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;