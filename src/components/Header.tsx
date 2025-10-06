import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Logo from './Logo';

//Assets
import moon from '../../assets/images/icon-moon.svg';
import sun from '../../assets/images/icon-sun.svg';

const Header = () => {
    const { isDark, toggleTheme } = useTheme();
    
    return (
        <header className="bg-neutral-0 dark:bg-neutral-800 p-4 shadow-md rounded-xl m-5 lg:mx-40 my-10 flex justify-between items-center border border-neutral-200 dark:border-neutral-700 transition-colors duration-200">
            <Logo />
            <button 
                onClick={toggleTheme}
                className="bg-neutral-100 dark:bg-neutral-700 p-3 rounded-lg hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:text-neutral-700 dark:hover:text-neutral-300 transition ease-out duration-200 focus:ring-2 focus:ring-red-500"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
                <img src={isDark ? sun : moon} alt={isDark ? "Light Mode" : "Night Mode"} />
            </button>
        </header>
    );
};

export default Header;