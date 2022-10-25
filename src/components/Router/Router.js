import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProgrammingCourses from '../Courses/Programming/ProgrammingCourses';
import About from '../Sharedfolder/About/About';
import Blog from '../Sharedfolder/Blog/Blog';
import Home from '../Sharedfolder/Home/Home';
import Main from '../Sharedfolder/Layout/Main';
import Login from '../Sharedfolder/Login/Login';
import Signup from '../Sharedfolder/Signup/Signup';
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
                    path: '/blog',
                    element: <Blog></Blog>,
                },
                {
                    path: '/about',
                    element: <About></About>,
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/signup',
                    element: <Signup></Signup>
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