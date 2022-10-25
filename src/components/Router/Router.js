import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Sharedfolder/Home/Home';
import Main from '../Sharedfolder/Layout/Main';

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
            ]
        }
    ])
    return (
        <RouterProvider router={router}>

        </RouterProvider >
    );
};

export default Router;