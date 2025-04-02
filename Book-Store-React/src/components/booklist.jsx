import React from 'react';
import books from '../books.json';
import BookItem from './bookitem';

function BookList({ cartCounts, increaseCartCount, decreaseCartCount }) {
    return (
        <div className="book-list">
            {books.map((book) => (
                <div key={book.id} className="book-card">
                    <BookItem 
                        book={book} 
                        count={cartCounts[book.id] || 0} 
                        increaseCartCount={() => increaseCartCount(book.id)} 
                        decreaseCartCount={() => decreaseCartCount(book.id)} 
                    />
                </div>
            ))}
        </div>
    );
};

export default BookList;