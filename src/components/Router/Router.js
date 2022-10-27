import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Courses from '../Courses/Courses';
import ProgrammingCourses from '../Programming/ProgrammingCourses';
import About from '../Sharedfolder/About/About';
import Blog from '../Sharedfolder/Blog/Blog';
import Checkout from '../Sharedfolder/Checkout/Checkout';
import FAQ from '../Sharedfolder/FAQ/FAQ';
import Home from '../Sharedfolder/Home/Home';
import Main from '../Sharedfolder/Layout/Main';
import Login from '../Sharedfolder/Login/Login';
import Profile from '../Sharedfolder/Profile/Profile';
import Signup from '../Sharedfolder/Signup/Signup';
import FourOfFourRouter from './FourOfFourRouter';
import PrivateRouter from './PrivateRouter';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('https://courses-server-eight.vercel.app/courses')
                },

                {
                    path: '/courses',
                    element: <PrivateRouter> <Courses></Courses></PrivateRouter>,
                    loader: async () => fetch(`https://courses-server-eight.vercel.app/courses`)
                },

                {
                    path: '/courses/:id',
                    element: <ProgrammingCourses></ProgrammingCourses>,
                    loader: async ({ params }) => fetch(`https://courses-server-eight.vercel.app/courses/${params.id}`)
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
                {
                    path: '/profile',
                    element: <PrivateRouter><Profile></Profile></PrivateRouter>
                },

                {
                    path: '/checkout',
                    element: <PrivateRouter><Checkout></Checkout></PrivateRouter>
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