import React, { useState, useEffect } from 'react';
import Header from './components/header';
import BookList from './components/booklist';
import LoginForm from './components/loginform';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './components/CartPage';
import './app.css';

function App() {
	//Tillståndshantering, håller koll på antalet böcker i kundvagnen med ett unikt id
	const [cartCount, setCartCount] = useState({});
	const [activeUser, setactiveUser] = useState(null);

	useEffect(() => {
		console.log('Updated cartCount:', cartCount);
	}, [cartCount]);

	//Funktion för att hantera utloggning
	const handleLogout = () => {
		setactiveUser(null);
	};
	//Funktion för att öka när man klickar på '+' på korten, använder bookId som argument
	//För den specifika boken så ökas antalet och om den inte finns så initieras värdet till 0 innan det ökar
	const increaseCartCount = (book, title) => {
		setCartCount((prevCounts) => ({
			...prevCounts,
			[book]: {
				id: book,
				title: title,
				count: (prevCounts[book]?.count || 0) + 1,
			},
		}));
	};

	//Funktion för att minska, har även kontroller så den inte kan bli minde än 0
	const decreaseCartCount = (book) => {
		setCartCount((prevCounts) => ({
			...prevCounts,
			[book]: {
				...prevCounts[book],
				count: Math.max((prevCounts[book]?.count || 0) - 1, 0),
			},
		}));
	};

	//Summerar alla böcker till en total siffra
	const totalCartCount = Object.values(cartCount).reduce(
		(total, book) => total + book.count,
		0
	);

	console.log(totalCartCount);
	

	const router = createBrowserRouter([
		{
			path: '/',
			element:
				<>
					<Header
						cartCount={totalCartCount}
						setactiveUser={handleLogout}
					/>
					<BookList
						cartCount={cartCount}
						increaseCartCount={increaseCartCount}
						decreaseCartCount={decreaseCartCount}
					/>
				</>

		},
		{
			path: '/cart',
			element:
				<>
					<Header
						cartCount={totalCartCount}
						setactiveUser={handleLogout}
					/>
					<Cart
						cartCount={cartCount}
						increaseCartCount={increaseCartCount}
						decreaseCartCount={decreaseCartCount}
					/>
				</>
		},
	]);

	//activeUser ? kollar om man är inloggad, annars så visas inte innehållet upp
	return (
		<div className='App'>
			{activeUser ? (
				<RouterProvider router={router} />
			) : (
				<LoginForm setactiveUser={setactiveUser} />
			)}
		</div>
	);
}

export default App;
