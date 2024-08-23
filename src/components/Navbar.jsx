import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <header className='header flex justify-between items-center px-10 pt-2 relative'>
            {/* Logo */}
            <NavLink to="/">
                <img src={logo} alt="Logo" className="w-[8rem] h-[4rem]" />
            </NavLink>

            {/* Hamburger menu icon */}
            <div className='md:hidden' onClick={toggleMenu}>
                {showMenu ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="sm:h-[3rem] h-6 sm:w-[3rem] w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <div>
                        <div className='w-8 h-1 bg-white my-1'></div>
                        <div className='w-8 h-1 bg-white my-1'></div>
                        <div className='w-8 h-1 bg-white my-1'></div>
                    </div>
                )}
            </div>

            {/* Navigation links */}
            <nav className={`flex sm:text-lg text-base gap-7 font-medium md:flex ${showMenu ? 'flex-col mt-4 md:mt-0 absolute md:relative top-16 right-3 md:right-auto bg-black-gradient p-3 z-[99]  transition-all duration-300 ease-in-out rounded-xl' : 'hidden'}`}>
                <NavLink to="/services_page" onClick={closeMenu} className={({ isActive }) => isActive ? 'text-secondary' : 'text-white'}>
                    Services
                </NavLink>
                <NavLink to="/pricing" onClick={closeMenu} className={({ isActive }) => isActive ? 'text-secondary' : 'text-white '}>
                    Pricing
                </NavLink>
                <NavLink to="/portfolio" onClick={closeMenu} className={({ isActive }) => isActive ? 'text-secondary' : 'text-white'}>
                    Portfolio
                </NavLink>
                <NavLink to="/contactus" onClick={closeMenu} className={({ isActive }) => isActive ? 'text-secondary' : 'text-white'}>
                    Contact Us
                </NavLink>
                <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'text-secondary' : 'text-white'}>
                    Why Primech?
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
