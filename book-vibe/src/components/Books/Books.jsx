import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ bookData }) => {


    return (
        <div>
            <Suspense fallback={<span>Loading...</span>}>
                <h1 className='font-bold text-3xl text-center mt-12 mb-3'>Books</h1>
                <div className='grid grid-cols-3 gap-5 container mx-auto my-10'>
                    {
                        bookData.map((book) => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;