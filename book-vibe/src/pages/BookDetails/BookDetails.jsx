import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { setDataToBD, setDataToWishBD } from '../../utilities/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const bookData = useLoaderData();
    const bookDetails = bookData.find(book => book.bookId === parseInt(id));
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing,
    } = bookDetails;

    const handleMarkRead = (id) => {
        setDataToBD(id);
    }
    const handleWishList = (id) => {
       setDataToWishBD(id);
}

    return (
        <div className='container mx-auto flex gap-5 justify-center items-center'>
            <div className='flex-1'>
                <img className=' my-5' src={image} alt="" />
            </div>
            <div className='flex-1'>
                <h1>{bookName}</h1>
                <h1>{author}</h1>
                <h1>{review}</h1>
                <h1>{totalPages}</h1>
                <h1>{rating}</h1>
                <h1>{category}</h1>
                <h1>{publisher}</h1>
                <h1>{yearOfPublishing}</h1>
                <h1>{tags}</h1>

                <div className='mt-5 flex gap-5'>
                    <button onClick={() => handleMarkRead(id)} className='btn btn-primary'>Mark as Read</button>
                    <button onClick={() => handleWishList(id)} className='btn btn-success'>Add to WishList</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;