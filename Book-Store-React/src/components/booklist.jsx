import React from 'react';
import books from '../books.json';
import BookItem from './bookitem';

const BookList = () => {
return (
    <div className="book-list">
    {books.map((book, index) => (
        <div key={index} className="book-card">
        <BookItem book={book} />
        </div>
    ))}
    </div>
);
};

export default BookList;