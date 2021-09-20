import React, { useEffect, useState } from 'react';

const FunctionalHook = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You Clicked ${count} times`;
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1)} > CLick {count} times</button>
        </div>
    );
};

export default FunctionalHook;