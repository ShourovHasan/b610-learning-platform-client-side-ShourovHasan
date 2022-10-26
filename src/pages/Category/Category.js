import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSummaryCard from '../Shared/CoursesSummaryCard/CoursesSummaryCard';
import './Category.css';

const Category = () => {
    const categoryCourses = useLoaderData();
    return (
        <div>
            {/* <h2 className='text-center mb-3'>This Department has {categoryCourses.length} courses</h2> */}
            <div className='course_alignment'>
                {
                    categoryCourses.map(courses => <CoursesSummaryCard
                        key={courses.id}
                        courses={courses}
                    ></CoursesSummaryCard>)
                }
            </div>
        </div>
    );
};

export default Category;