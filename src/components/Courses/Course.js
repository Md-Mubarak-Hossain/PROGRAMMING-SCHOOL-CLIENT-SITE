import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, name, image } = course;
    console.log(course)
    return (
        <div className='p-3'>
            <div className="card p-2 border border-primary  bg-base-100 shadow-xl">
                <figure className="px-3 pt-3 h-40">
                    <img src={image} alt={name} className="rounded-xl h-40" />
                </figure>
                <div className="card-body s-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions w-56">
                        <Link to={`/courses/${id}`}><button className="btn btn-outline btn-info w-40 uppercase">See details</button> </Link>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Course;