import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProgrammingCourses from '../Courses/Programming/ProgrammingCourses';
import About from '../Sharedfolder/About/About';
import Blog from '../Sharedfolder/Blog/Blog';
import Home from '../Sharedfolder/Home/Home';
import Main from '../Sharedfolder/Layout/Main';
import FourOfFourRouter from './FourOfFourRouter';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                },
                {
                    path: '/programmingCourse',
                    element: <ProgrammingCourses></ProgrammingCourses>
                },
                {
                    path: '/faq',
                    element: <Home></Home>,
                },
                {
                    path: '/bog',
                    element: <Blog></Blog>,
                },
                {
                    path: '/about',
                    element: <About></About>,
                },
            ]
        },
        {
            path: '/*',
            element: <FourOfFourRouter></FourOfFourRouter>,
        }
    ])
    return (
        <RouterProvider router={router}>

        </RouterProvider >
    );
};

export default Router;