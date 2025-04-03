import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

function Header({ cartCount, setactiveUser }) {
    return (
        <header>
            <section className='icon'><FontAwesomeIcon icon={faBookOpen} /></section>
            <button className="header__button" onClick={setactiveUser}>Logga ut</button>
                <section className='cart'>
                <h2 className='cart-title'>Cart</h2>
                <span className='in-cart'>{cartCount}</span>
            </section>
        </header>
    );
}

export default Header;