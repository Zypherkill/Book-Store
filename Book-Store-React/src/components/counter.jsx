import React from 'react';

function Counter({ count, increaseCount, decreaseCount }) {
    return (
        <div className='counter'>
            <button onClick={decreaseCount}>-</button>
            <span>{count}</span>
            <button onClick={increaseCount}>+</button>
        </div>
    );
}

export default Counter;