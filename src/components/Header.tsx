import React from 'react';

//Assets
import logo from '../../assets/images/logo.svg';
import moon from '../../assets/images/icon-moon.svg';

const Header = () => {
    return (
        <header className="bg-neutral-0 p-4 shadow-md rounded-xl mx-20 my-10 flex justify-between items-center border border-neutral-200">
            <img src={logo} alt="Logo" />
            <button className="bg-neutral-100 p-3 rounded-lg"><img src={moon} alt="Night Mode"/></button>
        </header>
    );
};

export default Header;