import React from 'react';
import {
    createBrowserRouter,
    Router,
    RouterProvider,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                path:'/',
                Component: Home
            }
        ]
    },
    {
        path: "*",
        Component: ErrorPage
    }
]);
