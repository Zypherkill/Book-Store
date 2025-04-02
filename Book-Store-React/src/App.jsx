import React, { useState } from 'react';
import Header from './components/header';
import BookList from './components/booklist';
import './app.css';

function App() {
    //Tillståndshantering, håller koll på antalet böcker i kundvagnen med ett unikt id
    const [cartCounts, setCartCounts] = useState({});

    //Funktion för att öka när man klickar på '+' på korten, använder bookId som argument
    //För den specifika boken så ökas antalet och om den inte finns så initieras värdet till 0 innan det ökar
    const increaseCartCount = (bookId) => {
        setCartCounts(prevCounts => ({
            //Spridningsoperator för att uppdatera tillstånden i kundvagnen
            ...prevCounts,
            [bookId]: (prevCounts[bookId] || 0) + 1
        }));
    };

    //Funktion för att minksa, har även kontroller så den inte kan bli minde än 0
    const decreaseCartCount = (bookId) => {
        setCartCounts(prevCounts => ({
            ...prevCounts,
            [bookId]: Math.max((prevCounts[bookId] || 0) - 1, 0)
        }));
    };
    //Summerar alla böcker till en total siffra
    const totalCartCount = Object.values(cartCounts).reduce((a, b) => a + b, 0);

    return (
        <div className="App">
            <Header cartCount={totalCartCount} />
            <BookList 
                cartCounts={cartCounts}
                increaseCartCount={increaseCartCount} 
                decreaseCartCount={decreaseCartCount} 
            />
        </div>
    );
}

export default App;