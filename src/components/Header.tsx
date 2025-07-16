import React from 'react';

//Assets
import logo from '../../assets/images/logo.svg';
import moon from '../../assets/images/icon-moon.svg';

const Header = () => {
    return (
        <header className="bg-neutral-0 p-4 shadow-md rounded-xl lg:mx-40 my-10 flex justify-between items-center border border-neutral-200 ">
            <img src={logo} alt="Logo" />
            <button className="bg-neutral-100 p-3 rounded-lg hover:bg-neutral-400 hover:text-neutral-700 transition ease-out duration-200 focus:ring-2 focus:ring-red-500"><img src={moon} alt="Night Mode"/></button>
        </header>
    );
};

export default Header;