import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    const [isToggle, setIsToggle] = useState(false);
    const handleToggleBtn = () => {
        setIsToggle(!isToggle)
    }
    const activeStyle = {
        fontWeight: "bold",
        color: "#8f2622",
        borderBottom: '2px solid #8f2622',
    }
    return (
        <nav className="bg-green-500 shadow-lg sticky top-0 z-40 text-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="lg:flex justify-between flex md:block">
                    <div className="md:flex lg:space-x-7">
                        <div className="md:w-2/6 mr-4">
                            {/* Website Logo  */}
                            <NavLink to="/home" className="flex items-center py-4 px-2">
                                <img src='https://i.ibb.co/PCkzndt/logo.png' alt="Logo" className="h-10 w-10 mr-2" />
                                <span className="font-semibold text-red-800  text-lg">ClinilcUniverse</span>
                            </NavLink>
                        </div>
                        {/* Primary Navbar items */}
                        <div className="hidden md:flex md:w-4/6 lg:w-full items-center space-x-1">
                            <NavLink to="/home" activeStyle={activeStyle} className="py-2 px-2 hover:text-red-800 text-gray-200 font-md ">Home</NavLink>
                            <NavLink as={Link} to="/about" activeStyle={activeStyle} className="py-2 px-2 text-gray-200 font-md  hover:text-red-800 transition duration-300">About</NavLink>
                            <HashLink to="/home#services" className="py-2 px-2 text-gray-200 font-md  hover:text-red-800 transition duration-300">Services</HashLink>
                            <HashLink to="/home#doctors" className="py-2 px-2 text-gray-200 font-md  hover:text-red-800 transition duration-300">Doctors</HashLink>
                            <NavLink to="/contact" activeStyle={activeStyle} className="py-2 px-2 text-gray-200 font-md  hover:text-red-800 transition duration-300">Contact Us</NavLink>
                        </div>
                    </div>
                    {/* Secondary Navbar items */}
                    <div className="hidden  md:flex justify-between md:py-2 items-center space-x-3 ">
                        {
                            user.email && <>
                                <span className=" text-red-700">Hello, {user?.displayName}</span> <img className="rounded-full w-10 h-10 cursor-pointer" src={user.photoURL} alt="" /></>
                        }
                        {
                            user.email ?
                                <NavLink to="/login">
                                    <button onClick={logOut} className="py-2 px-3 text-gray-200 bg-red-700 hover:bg-red-900 transition duration-300 rounded-full font-md ">Log Out</button>
                                </NavLink>
                                :
                                <NavLink to="/login" className="py-2 px-3 font-md  text-gray-200 hover:bg-red-800 hover:text-gray-200 transition duration-300 font-md  rounded-full">Log In</NavLink>
                        }

                        <NavLink to="/register" className="py-2 px-3 font-medium text-gray-200 rounded-full bg-red-700 hover:bg-red-900 transition duration-300">Sign Up</NavLink>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={handleToggleBtn} className="outline-none mobile-menu-button">
                            <svg className=" w-6 h-6 text-gray-200 hover:text-red-800 "
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* mobile menu */}
            {
                isToggle &&
                <div className="md:hidden mobile-menu">
                    <ul className="">
                        <li className=""><NavLink to="/home" className="block text-sm px-2 py-4 text-gray-200 hover:bg-red-800 font-md ">Home</NavLink></li>
                        <li><NavLink to="/about" className="block text-sm px-2 py-4 hover:bg-red-800 transition duration-300">About</NavLink></li>
                        <li><HashLink to="/home#services" className="block text-sm px-2 py-4 hover:bg-red-800 transition duration-300">Services</HashLink></li>
                        <li><Link to="/home#doctors" className="block text-sm px-2 py-4 hover:bg-red-800 transition duration-300">Docotrs</Link></li>
                        <li><NavLink to="/contact" className="block text-sm px-2 py-4 hover:bg-red-800 transition duration-300">Contact Us</NavLink></li>

                        {
                            user.email && <>
                                <li className="flex justify-end px-4">
                                    <span className=" text-red-700 mr-8">Hello, {user?.displayName}</span> <img className="rounded-full w-10 h-10 cursor-pointer" src={user.photoURL} alt="" />
                                </li>
                            </>
                        }
                        {
                            user.email ?
                                <li>
                                    <NavLink to="/login">
                                        <button onClick={logOut} className="py-2 px-3 text-gray-200 bg-red-700 hover:bg-red-900 transition duration-300 rounded-full font-md ">Log Out</button>
                                    </NavLink>
                                </li>
                                :
                                <li>
                                    <NavLink to="/login" className="block text-sm px-2 py-4 hover:bg-red-800 transition duration-300">Log In</NavLink>
                                </li>
                        }
                        <li className="py-4"><NavLink to="/register" className="py-2 px-3 font-medium text-gray-200 rounded-full bg-red-700 hover:bg-red-900 transition duration-300">Sign Up</NavLink>
                        </li>

                    </ul>
                </div>
            }
        </nav>
    );
};
export default Header;