import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getBookFromReadDB, getBookFromWishDB } from '../../utilities/addToDB';
import Book from '../../components/Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const bookData = useLoaderData();
    const [sort, setSort] = useState('');

    useEffect(() => {
        const storedReadingList = getBookFromReadDB();
        const convertedID = storedReadingList.map(id => JSON.parse(id));
        const myReadingList = bookData.filter(book => convertedID.includes(book.bookId));
        setReadList(myReadingList);
    }, []);
    useEffect(() => {
        const storedWishList = getBookFromWishDB();
        const convertedID = storedWishList.map(id => JSON.parse(id));
        const myWishList = bookData.filter(book => convertedID.includes(book.bookId));
        setWishList(myWishList);
    }, []);

    const handleSort = (type) => {
        setSort(type);
        if (sort === "pages") {
            const sorted = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sorted);
        }
        if (sort === "rating") {
            const sorted = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sorted);
        } 
    }

    return (
        <div className='container mx-auto my-10'>
            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">Sort by: {sort?sort:'' }</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=> handleSort('pages')}><a>Pages</a></li>
                    <li onClick={()=> handleSort('rating')}><a>Rating</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Reading List { readList.length}</Tab>
                    <Tab>Wish List { wishList.length}</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-3'>
                        {
                            readList.map(book => <Book book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3'>
                        {
                            wishList.map(book => <Book book={book}></Book>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;