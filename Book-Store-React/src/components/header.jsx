import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

function Header({ cartCounts }) {
    return (
        <header>
            <section className='icon'><FontAwesomeIcon icon={faBookOpen} /></section>
                <button className="log-out">Logga ut</button>
                <section className='cart'>
                <h2 className='cart-title'>Cart</h2>
                <span className='in-cart'>{cartCounts}</span>
            </section>
        </header>
    );
}

export default Header;