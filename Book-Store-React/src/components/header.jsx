import React from 'react';

function Header () {
    return (
    <header>
        <h1 className='page-title'>My Book Collection</h1>
        <section className='cart'>
            <h2 className='cart-title'>Cart</h2>
            <section className='in-cart'>0</section>
        </section>
    </header>
    );
};

export default Header;