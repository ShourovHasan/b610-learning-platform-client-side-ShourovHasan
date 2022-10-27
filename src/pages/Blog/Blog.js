import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <div className='w-75 m-auto'>
            <Accordion className='blog_container'>
                <h3 className='text-center'>Some Important Blogs</h3>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>what is cors?</Accordion.Header>
                    <Accordion.Body>
                        CORS is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        There are a number of reasons why someone might choose to use Firebase for authentication:
                        <ol>
                            <li>
                                Firebase offers a number of features that make it easy to set up authentication, including pre-built UI components that can be used to collect user credentials.
                            </li>
                            <li>
                                Firebase integrates with a number of other services that might be used in a web or mobile app, making it easy to add authentication to an existing project.
                            </li>
                            <li>
                                Firebase offers a generous free tier that includes a number of features that are useful for authentication, such as user management and security rules.
                            </li>
                        </ol>
                        Some other options for implementing authentication include Auth0, Okta, and AWS Cognito.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        The private route is a route that can only be accessed by an authenticated user.

                        When a user tries to access a private route, the router will first check to see if the user is logged in. If the user is not logged in, the router will redirect the user to the login page. If the user is logged in, the router will allow the user to access the route.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        Node is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
                        <br />
                        Node works by using an event-driven, non-blocking I/O model that makes it lightweight and efficient.

                        Node is similar to other programming languages like Ruby and Python in that it uses an event-driven model. This means that when a Node program is running, it is constantly listening for events. When an event occurs, the program will respond to the event. This makes Node very efficient because it can handle a large number of events with a very small amount of code.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;