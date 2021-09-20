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