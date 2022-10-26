import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className='mb-5 '>
            <Container>
                <Row className='rounded'>
                    <Col lg="7" className=' m-0 p-0'>
                        <Image className='img-fluid' src='home.jpg'></Image>
                    </Col>
                    <Col lg="5" className='home_container bg-black text-white text-center py-3'>
                        <h3>The online website "AIUB PORTAL" is a great resource for learning courses. It offers a variety of courses that are suitable for all levels of learners. The courses are well organized and easy to follow. The website also provides a community forum where users can interact with each other and share their experiences.</h3>
                        <Link className='btn btn-primary mt-3 w-50 mb-2 m-auto display-5' to={`/allCourses`}>Get Started</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;