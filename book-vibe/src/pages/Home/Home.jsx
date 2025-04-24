import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../../components/Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const bookData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Books bookData={bookData}></Books>
        </div>
    );
};

export default Home;