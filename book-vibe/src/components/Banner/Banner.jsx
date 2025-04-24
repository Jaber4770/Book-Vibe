import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto flex gap-3 items-center justify-between my-5'>
            <div>
                <h1 className='font-bold text-3xl'>Lorem ipsum dolor sit amet.</h1>
                <button className='btn btn-primary'>Buy Now</button>
            </div>
            <div>
                <img src="books.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;