import React from 'react';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import './Home.css';
import RecentCourses3 from './RecentCourses3/RecentCourses3';

const Home = () => {
    return (
        <div className='mb-5'>
            <Banner></Banner>
            <RecentCourses3></RecentCourses3>
            {/* <ContactUs></ContactUs> */}
        </div>
    );
};

export default Home;