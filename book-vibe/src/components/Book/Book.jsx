import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';


const Book = ({ book }) => {

    const { bookName, bookId, author, image,totalPages, rating, category, tags, publisher
    } = book;

    return (
        <Link to={`bookDetails/${bookId}`}>
            <div>
                <div className="card bg-base-100 w-96 shadow-lg">
                    <figure className='bg-gray-300 p-2 m-2'>
                        <img className='w-2/6'
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{bookName}</h2>
                        <p>{author}</p>
                        <p>{publisher}</p>
                        <p>{totalPages}</p>
                        <div className='flex justify-between'>
                            <p>{category}</p>
                            <p className='flex items-center gap-3'>
                                <FaStar />
                                {rating}
                            </p>
                        </div>
                        <div>
                            {
                                tags.map((tag, i) => <span className='text-green-500 font-semibold pe-2' key={i}>{tag}</span>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;