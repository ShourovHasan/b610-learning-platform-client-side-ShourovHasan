import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSummaryCard from '../Shared/CoursesSummaryCard/CoursesSummaryCard';

const AllCourses = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h2 className='text-center mb-3'>This Department has {allCourses.length} courses</h2>
            {
                allCourses.map(courses => <CoursesSummaryCard key={courses.id} courses={courses}></CoursesSummaryCard>)
            }
        </div>
    );
};

export default AllCourses;