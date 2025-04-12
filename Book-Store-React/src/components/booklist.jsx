import React, { useEffect, useState } from 'react';
import BookItem from './bookitem';
import axios from 'axios';

function BookList({ cartCount, increaseCartCount, decreaseCartCount }) {
    //Usestate variabel för böckerna
	const [books, setBooks] = useState([]);

    //useEffect som låter mig köra datahämtningen när komponenten laddas
	useEffect(() => {
		// Hämtar data från api:et med axios
		axios
			.get('https://santosnr6.github.io/Data/books.json')
			.then((response) => {
				console.log(response);
				// Uppdatera state med de hämtade böckerna
				setBooks(response.data);
			})
            //Fånga error om api:et inte hämtas korrekt
			.catch((error) => {
				console.error('Det blev en fel vid hämtning av data: ', error);
			});
	}, []);

	return (
		<div className='book-list'>
			{books.map((book) => (
				<div key={book.id} className='book-card'>
					<BookItem
						book={book}
						count={cartCount[book.id]?.count || 0}
						increaseCartCount={() => increaseCartCount(book.id, book.title)}
						decreaseCartCount={() => decreaseCartCount(book.id)}
					/>
				</div>
			))}
		</div>
	);
}

export default BookList;
