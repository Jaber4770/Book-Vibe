import React from 'react';
import {
    createBrowserRouter,
    Router,
    RouterProvider,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Service from '../pages/Service/Service';
import Contact from '../pages/Contact/Contact';
import BookDetails from '../pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('booksData.json'),
                path: '/',
                Component: Home
            },
            {
                path: '/bookDetails/:id',
                Component: BookDetails,
                loader: () => fetch('booksData.json'),

            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/service',
                Component: Service
            },
            {
                path: '/contact',
                Component: Contact
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: "*",
        Component: ErrorPage
    }
]);
