import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SliderCarosel = () => {
    const slider = useLoaderData();
    console.log(slider);
    return (
        <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full ">
                <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <Link to=''><button className="btn btn-outline btn-info w-40">Go Now</button> </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default SliderCarosel;