import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div>
            <Accordion className='w-75 mb-3 m-auto'>
                <h3 className='text-center'>Frequently Asked Questions</h3>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Have you ever used  custom hook? For which task you used it?</Accordion.Header>
                    <Accordion.Body>
                        Yes, I've used custom hooks for a variety of tasks. For example, I've used a custom hook to fetch data from an API and store it in a React state. I've also used custom hooks to handle form submission.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why do you need private route in your project?</Accordion.Header>
                    <Accordion.Body>
                        There are a few reasons why you might need a private route in your project:
                        <ol>
                            <li>
                                To protect certain pages from being accessed by unauthorized users
                            </li>
                            <li>
                                To ensure that only logged in users can access certain pages
                            </li>
                            <li>
                                To hide pages from users who are not logged in
                            </li>
                        </ol>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How will you make a route private in Reactjs?</Accordion.Header>
                    <Accordion.Body>
                        There are several ways to make a route private in Reactjs. One way is to use the React Router library. React Router provides an component that can be used to create a private route. Another way is to use a higher-order component (HOC) such as React-Redux's connect() function. This function will wrap the component with the necessary code to make it private.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is the necessity of useRef hook?</Accordion.Header>
                    <Accordion.Body>
                        The useRef hook is necessary for creating refs in a functional component. Refs are used to access DOM nodes or React elements created in the render method. <br />
                        Without the useRef hook, it would be difficult to access these elements since they don't have a direct reference. The useRef hook creates a ref object that can be used to access these elements.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        Can you give an example of where & how you can use react router?
                    </Accordion.Header>
                    <Accordion.Body>
                        React Router can be used in any application that needs to navigate between different pages or views. Some examples include:
                        <ul>
                            <li>
                                A single page application that needs to navigate between different sections
                            </li>
                            <li>
                                A mobile application that needs to navigate between different screens
                            </li>
                            <li>
                                A website that needs to navigate between different pages
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        What is nested routing?
                    </Accordion.Header>
                    <Accordion.Body>
                        Nested routing is a routing technique used in single page applications where the application has multiple views. Each view is associated with a controller. The controller for each view is responsible for loading the view. The router is responsible for loading the controller and passing the controller the data it needs to render the view.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>
                        Differences between react-router-dom & react-router-native?
                    </Accordion.Header>
                    <Accordion.Body>
                        The main difference between react-router-dom and react-router-native is that react-router-native is designed specifically for React Native applications, while react-router-dom is designed for web applications.
                        <br />
                        React Router Native has a few features that set it apart from React Router DOM. One is that it uses Animated library Animated API instead of React Transition Group. This means that animations are smoother and have better performance on mobile devices. Another difference is that React Router Native uses NativeModules to interface with the native navigators for each platform (e.g. NavigatorIOS, NavigationExperimental), while React Router DOM interfaces directly with the browser's history API.
                        <br />
                        React Router Native is also designed to work with React Native's Navigator component, which is not compatible with React Router DOM. React Router DOM can still be used with React Native applications, but it requires using a third-party library like react-router-native-redux to interface with the Navigator component.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>
                        What is strict mood in react?
                    </Accordion.Header>
                    <Accordion.Body>
                        The strict mode is a way to opt-in to a particular mode of the JavaScript engine. When you enable strict mode, it applies several different optimizations and restrictions to your code. One of the most important aspects of strict mode is that it prevents certain actions from being taken that could lead to vulnerabilities in your code.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>
                        What are the ways to share data among routes in react router?
                    </Accordion.Header>
                    <Accordion.Body>
                        There are several ways to share data among routes in react router:
                        <ol>
                            <li>
                                Use the React Context API
                            </li>
                            <li>
                                Use React Router's match, location, and history props
                            </li>
                            <li>
                                Use query strings
                            </li>
                            <li>
                                Use local storage
                            </li>
                        </ol>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header>
                        Why will you use dynamic route?
                    </Accordion.Header>
                    <Accordion.Body>
                        There are many reasons to use a dynamic route. The most common reason is to allow a user to access a page that does not have a static URL. This is often used for pages that are generated based on user input, such as a search results page. Dynamic routes can also be used to create friendly URLs that are easy to remember and share.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;