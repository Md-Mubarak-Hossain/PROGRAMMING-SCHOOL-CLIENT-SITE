import React from 'react';
import { Link } from 'react-router-dom';

const Courses = ({ course }) => {
    const { id, title } = course;
    return (
        <div className='mt-3'>
            <Link to={`/courses/${id}`}><button className="btn btn-outline btn-info w-56">{title}</button> </Link>
        </div>
    );
};

export default Courses;