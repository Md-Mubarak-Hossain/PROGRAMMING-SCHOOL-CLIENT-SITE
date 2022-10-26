import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../../Courses/Course';
import Courses from '../../Courses/Courses';

const Home = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='p-4'>
            {
                <div className="flex w-full border border-primary ">
                    <div className="grid w-3/12 flex-grow card  place-Items-center ">

                        <ul className="menu  w-56 px-2 rounded mt-0">
                            <li className=" uppercase text-warning fw-bold"><h2 className='uppercase text-warning text-4xl font-extrabold'> Courses</h2>
                            </li>
                            {
                                courses.map(course =>
                                    <Courses key={course.id}
                                        course={course}>

                                    </Courses>

                                )


                            }

                        </ul>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className='w-9/12 text-center uppercase'>
                        <p className='my-5  text-warning  text-4xl font-extrabold'>Programming Language courses</p>
                        <div className="grid grid-cols-3  w-full flex-grow card  place-Items-center" >

                            {
                                courses.map(course =>
                                    <Course key={course.id}
                                        course={course}>
                                    </Course>
                                )
                            }

                        </div >
                    </div>
                </div >
            }
        </div >
    );
};

export default Home;