import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSummaryCard from '../Shared/CoursesSummaryCard/CoursesSummaryCard';

const Category = () => {
    const categoryCourses = useLoaderData();
    return (
        <div className=''>
            
        </div>
    );
};

export default Category;