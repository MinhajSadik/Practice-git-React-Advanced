import React, { useEffect, useState } from 'react';

const FunctionalMouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)


    const logMousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            // the point is note here when you want to execute some component cleanup code you include it in a function and return that function from the function passed to useEffect the cleanup code can be canceling subscriptions timers or even removing event handleers as we want.

            window.removeEventListener('mousemove', logMousePosition);
            console.log('component unmouting code');
        }
    },[])

    return (
        <div>
            X -- {x} Y -- {y}
        </div>
    );
};

export default FunctionalMouse;