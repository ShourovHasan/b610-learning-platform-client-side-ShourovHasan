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
            <div className='department_container rounded'>
                {
                    categories.map(category =>
                        <p key={category.id} className='px-2 py-1 rounded'>
                            <NavLink className={`navbar-brand ({ isActive }) => isActive ? ' ' : undefined`} to={`/allCourses/category/${category.id}`}>{category.name}</NavLink>
                        </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideBar;