import React, { useState } from 'react';
import './index.css';

const Component = () => {
    const [themeBlack, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme(!themeBlack);
    };
    return (
        <div>
            <div className={`main ${themeBlack ? 'black' : 'white'}`}>Hello World!</div>
            <br />
            <button onClick={toggleTheme}>toggle theme</button>
        </div>
    );
};

export default Component;
