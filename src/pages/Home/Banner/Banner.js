import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row flex justify-content-around">
                    <div className="col-md-5 mb-3">
                        {/* <h1 className="display-6 fw-bold">AIUB PORTAL</h1> */}
                        <p className='home_container'>The online website <strong>"AIUB PORTAL"</strong> is a great resource for learning courses. It offers a variety of courses that are suitable for all levels of learners. The courses are well organized and easy to follow. The website also provides a community forum where users can interact with each other and share their experiences.</p>
                        {/* <button className="btn btn-success">Learn More</button> */}
                        <div className='text-center'>
                            <Link className='btn btn-primary mt-3 w-50 mb-2 m-auto display-5' to={`/allCourses`}>Get Started</Link> <br></br>
                            <Link className='btn btn-primary me-2 px-4 ' to='/login'>Login</Link>
                            <Link className='btn btn-primary px-4' to='/register'>Register</Link>
                        </div>
                    </div>
                    <div className="col-md-7 text-center">
                        <img className="rounded-circle mx-auto" style={{ 'maxHeight': '380px' }} src="home.jpg" alt="" />
                        {/* <div className=''>
                            </div> */}
                        {/* <div className=''></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;