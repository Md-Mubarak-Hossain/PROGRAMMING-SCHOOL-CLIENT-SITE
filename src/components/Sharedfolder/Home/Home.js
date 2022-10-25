import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='p-4'>
            <div className="flex w-full border border-primary ">
                <div className="grid w-3/12 flex-grow card  place-Items-center ">

                    <ul className="menu bg-base-100 w-56 px-2 rounded mt-0">
                        <li className="menu-title mt-0"><h2 >Sidebar</h2>
                        </li>
                        <li><Link to=''><button className="btn btn-outline btn-info w-56">Item 1</button> </Link></li>
                        <li><Link to=''><button className="btn btn-outline btn-info w-56">Item 2</button> </Link></li>
                        <li><Link to=''><button className="btn btn-outline btn-info w-56">Item 3</button> </Link></li>
                        <li><Link to=''><button className="btn btn-outline btn-info w-56">Item 4</button> </Link></li>
                        <li><Link to=''><button className="btn btn-outline btn-info w-56">Item 5</button> </Link></li>
                        <li><Link to=''><button className="btn btn-outline btn-info w-56">Item 6</button> </Link></li>
                    </ul>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className='w-9/12 text-center uppercase'>
                    <p className='my-5  text-warning  fw-bold'>Programming Language courses</p>
                    <div className="grid grid-cols-3  w-full flex-grow card  place-Items-center" >

                        <div className='p-3'>
                            <div className="card p-2 border border-primary  bg-base-100 shadow-xl">
                                <figure className="px-3 pt-3">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body s-center text-center">
                                    <h2 className="card-title">Shoes!</h2>

                                    <div className="card-actions w-56">
                                        <Link to=''><button className="btn btn-outline btn-info w-40">Go Now</button> </Link>
                                    </div>
                                </div>
                            </div >

                        </div >
                        <div className='p-3'>
                            <div className="card p-2 border border-primary  bg-base-100 shadow-xl">
                                <figure className="px-3 pt-3">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body s-center text-center">
                                    <h2 className="card-title">Shoes!</h2>

                                    <div className="card-actions w-56">
                                        <Link to=''><button className="btn btn-outline btn-info w-40">Go Now</button> </Link>
                                    </div>
                                </div>
                            </div >

                        </div >
                        <div className='p-3'>
                            <div className="card p-2 border border-primary  bg-base-100 shadow-xl">
                                <figure className="px-3 pt-3">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body s-center text-center">
                                    <h2 className="card-title">Shoes!</h2>

                                    <div className="card-actions w-56">
                                        <Link to=''><button className="btn btn-outline btn-info w-40">Go Now</button> </Link>
                                    </div>
                                </div>
                            </div >

                        </div >
                        <div className='p-3'>
                            <div className="card p-2 border border-primary  bg-base-100 shadow-xl">
                                <figure className="px-3 pt-3">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body s-center text-center">
                                    <h2 className="card-title">Shoes!</h2>

                                    <div className="card-actions w-56">
                                        <Link to=''><button className="btn btn-outline btn-info w-40">Go Now</button> </Link>
                                    </div>
                                </div>
                            </div >

                        </div >
                        <div className='p-3'>
                            <div className="card p-2 border border-primary  bg-base-100 shadow-xl">
                                <figure className="px-3 pt-3">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body s-center text-center">
                                    <h2 className="card-title">Shoes!</h2>

                                    <div className="card-actions w-56">
                                        <Link to=''><button className="btn btn-outline btn-info w-40">Go Now</button> </Link>
                                    </div>
                                </div>
                            </div >

                        </div >
                        <div className='p-3'>
                            <div className="card p-2 border border-primary  bg-base-100 shadow-xl">
                                <figure className="px-3 pt-3">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body s-center text-center">
                                    <h2 className="card-title">Shoes!</h2>

                                    <div className="card-actions w-56">
                                        <Link to=''><button className="btn btn-outline btn-info w-40">Go Now</button> </Link>
                                    </div>
                                </div>
                            </div >
                        </div >
                    </div >
                </div>
            </div >
        </div >
    );
};

export default Home;