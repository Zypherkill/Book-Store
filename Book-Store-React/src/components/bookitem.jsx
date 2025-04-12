import React from 'react';
import Counter from './counter';

function BookItem({ count, book, increaseCartCount, decreaseCartCount }) {
    return (
        <>
            <h2>{book.title}</h2>
            <h4>Författare: {book.author}</h4>
            <p>{book.about}</p>
            <Counter 
                count={count}
                increaseCount={increaseCartCount} 
                decreaseCount={decreaseCartCount} 
            />
        </>
    );
}

export default BookItem;