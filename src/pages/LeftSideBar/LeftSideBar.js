import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './LeftSideBar.css';

const LeftSideBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://b610-lerning-platform-server-side-shourovhasan.vercel.app/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h4 className='text-center mb-4'>Courses Departments</h4>
            
        </div>
    );
};

export default LeftSideBar;