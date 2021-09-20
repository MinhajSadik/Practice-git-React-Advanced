import React, { useState } from 'react';
import FunctionalMouse from './FunctionalMouse';

const MouseContainer = () => {
    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {
                display && <FunctionalMouse/>
            }
        </div>
    );
};

export default MouseContainer;