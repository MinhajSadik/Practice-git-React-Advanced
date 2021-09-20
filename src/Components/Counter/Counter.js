import React, { useState } from 'react';

const Counter = () => {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)         
        }
    }
    return (
        <div>
            count: {count}
            <button onClick={() => setCount(initialValue)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment-Five</button>
        </div>
    );
};

export default Counter;