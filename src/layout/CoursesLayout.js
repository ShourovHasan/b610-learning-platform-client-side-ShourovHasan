import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideBar from '../pages/LeftSideBar/LeftSideBar';

const CoursesLayout = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="3">
                        <LeftSideBar></LeftSideBar>
                    </Col>
                    <Col lg="9">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CoursesLayout;