import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SliderCarosel from '../SliderCarosel/SliderCarosel';

const Main = () => {
    return (
        <>
            <Header></Header>
            <SliderCarosel></SliderCarosel>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;