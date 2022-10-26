import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProgrammingCourses = () => {
    const course = useLoaderData();
    console.log(course);
    const { description, image, name, title, free, medium, premium } = course;
    console.log(free)


    return (
        <div className='w-full'>
            <div className='w-full'>
                <div className='flex mx-auto px-2 my-5 py-5 uppercase text-5xl font-extrabold leading-6 text-warning'>
                    <span className='text-center px-3'> Welcome </span>
                    <img className='w-12 h-12 rounded-full   ' src={image} alt={name} />
                    <span className='px-3'>{title} </span>
                </div>
                <div className="card w-full bg-base-100 shadow-xl mx-auto">
                    <figure><img src={image} alt={name} className='h-64' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{description}</p>
                        <button className="badge badge-outline">Download </button>
                        <div className="card-actions justify-end w-full">
                            {
                                <div className='flex mx-auto'>


                                    <div className="card w-80 p-2 m-3  bg-success text-secondary shadow-xl">
                                        <div className="card-body">
                                            <h2 className="card-title">Free!</h2>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                            <figure><img src={image} alt={name} /></figure>
                                            {
                                                free.map(f => <li>{f}</li>)
                                            }
                                            <div className="card-actions justify-end">
                                                <button className="badge badge-outline">Enroll Now</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card w-80 p-2 m-3  bg-warning text-primary shadow-xl">

                                        <div className="card-body">
                                            <h2 className="card-title">Pro Medium!!</h2>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                            <figure><img src={image} alt={name} /></figure>
                                            {
                                                medium.map(m => <li>{m}</li>)
                                            }
                                            <div className="card-actions justify-end">
                                                <button className="badge badge-outline">Enroll Now</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card w-80 p-2 m-3  bg-primary text-primary-content">
                                        <div className="card-body">
                                            <h2 className="card-title">Pro Premium!!!</h2>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                            <figure><img src={image} alt={name} /></figure>
                                            {
                                                premium.map(p => <li>{p}</li>)
                                            }
                                            <div className="card-actions justify-end">
                                                <button className="badge badge-outline">Enroll Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProgrammingCourses;