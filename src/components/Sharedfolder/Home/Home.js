import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../../Courses/Course';
import Courses from '../../Courses/Courses';

const Home = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='p-4'>{
            <div className="lg:flex w-full ">
                <div className="grid lg:w-3/12 flex-grow card  place-Items-center border border-primary">
                    <ul className="menu  lg:w-56 px-2 rounded mt-0 mx-auto">
                        <li className=" uppercase text-warning fw-bold"><h2 className='uppercase text-warning text-4xl font-extrabold'> Courses</h2>
                        </li>
                        {
                            courses.map(course =>
                                <Courses key={course._id}
                                    course={course}>

                                </Courses>
                            )
                        }
                    </ul>
                </div>

                <div className='w-full lg:w-9/12 text-center uppercase border border-primary'>
                    <p className='my-5  text-warning  text-4xl font-extrabold'>Programming Language courses</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3  w-full flex-grow card  place-Items-center" >
                        {
                            courses.map(course =>
                                <Course key={course._id}
                                    course={course}>
                                </Course>
                            )
                        }

                    </div >

                </div>
            </div>

        }

        </div >
    );
};

export default Home;