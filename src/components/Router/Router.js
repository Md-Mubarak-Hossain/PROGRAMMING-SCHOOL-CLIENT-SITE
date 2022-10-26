import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Courses from '../Courses/Courses';
import ProgrammingCourses from '../Programming/ProgrammingCourses';
import About from '../Sharedfolder/About/About';
import Blog from '../Sharedfolder/Blog/Blog';
import FAQ from '../Sharedfolder/FAQ/FAQ';
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
                    loader: () => fetch('http://localhost:5000/courses')
                },

                {
                    path: '/courses',
                    element: <Courses></Courses>,
                    loader: async () => fetch(`http://localhost:5000/courses`)
                },

                {
                    path: '/courses/:id',
                    element: <ProgrammingCourses></ProgrammingCourses>,
                    loader: async ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
                },
                {
                    path: '/faq',
                    element: <FAQ></FAQ>
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