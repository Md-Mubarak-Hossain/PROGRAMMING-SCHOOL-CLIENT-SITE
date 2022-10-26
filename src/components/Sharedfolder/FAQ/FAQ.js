import React, { useState } from 'react';
import { GlobalStyles } from '../../DarkLight/global';
import { darkTheme, lightTheme } from '../../DarkLight/theme';
import { ThemeProvider } from 'styled-components';

const FAQ = () => {


    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    return (
        <div>
            {/* <button onClick={toggleTheme}>Toggle2</button>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />
            </ThemeProvider> */}
        </div >
    );
};


export default FAQ;