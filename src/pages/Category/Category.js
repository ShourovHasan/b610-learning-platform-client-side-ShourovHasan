import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSummaryCard from '../Shared/CoursesSummaryCard/CoursesSummaryCard';

const Category = () => {
    const categoryCourses = useLoaderData();
    return (
        <div className=''>
            <h2 className='text-center mb-3'>This Department has {categoryCourses.length} courses</h2>
            {
                categoryCourses.map(courses => <CoursesSummaryCard
                    key={courses.id}
                    courses={courses}
                ></CoursesSummaryCard>)
            }
        </div>
    );
};

export default Category;