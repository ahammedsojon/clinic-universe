import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, isLoading, logOut } = useAuth();
    const [isToggle, setIsToggle] = useState(false);
    const handleToggleBtn = () => {
        setIsToggle(!isToggle)
    }

    return (
        <nav className="bg-green-500 shadow-lg sticky top-0 z-40 text-gray-200">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            {/* Website Logo  */}
                            <Link to="/home" className="flex items-center py-4 px-2">
                                <img src='https://i.ibb.co/PCkzndt/logo.png' alt="Logo" className="h-10 w-10 mr-2" />
                                <span className="font-semibold text-red-800  text-lg text-lg">ClinilcUniverse</span>
                            </Link>
                        </div>
                        {/* Primary Navbar items */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link to="/home" className="py-4 px-2 hover:text-red-800 text-gray-200 font-md">Home</Link>
                            <HashLink to="/home#services" className="py-4 px-2 text-gray-200 font-md hover:text-red-800 transition duration-300">Services</HashLink>
                            <Link as={Link} to="/about" className="py-4 px-2 text-gray-200 font-md hover:text-red-800 transition duration-300">About</Link>
                            <Link to="/contact" className="py-4 px-2 text-gray-200 font-md hover:text-red-800 transition duration-300">Contact Us</Link>
                        </div>
                    </div>
                    {/* Secondary Navbar items */}
                    <div className="hidden md:flex items-center space-x-3 ">
                        {
                            user.email && <>
                                <span className=" text-red-700">Hello, {user?.displayName}</span> <img className="rounded-full w-10 h-10 cursor-pointer" src={user.photoURL} alt="" /></>
                        }
                        {
                            user.email ?
                                <Link to="/login">
                                    <button onClick={logOut} className="py-2 px-3 text-gray-200 bg-red-700 hover:bg-red-900 transition duration-300 rounded-full font-md">Log Out</button>
                                </Link>
                                :
                                <Link to="/login" className="py-2 px-3 font-medium text-gray-200 hover:bg-red-800 hover:text-gray-200 transition duration-300 font-md rounded-full">Log In</Link>
                        }

                        <Link to="/register" className="py-2 px-3 font-medium text-gray-200 rounded-full bg-red-700 hover:bg-red-900 transition duration-300">Sign Up</Link>
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
                !isToggle ? <div className="hidden mobile-menu">
                    <ul className="">
                        <li className="active"><Link to="/home" className="block text-sm px-2 py-4 text-gray-200 bg-red-800 font-md">Home</Link></li>
                        <li><HashLink to="/home#services" className="block text-sm px-2 py-4 hover:bg-red-800 transition duration-300">Services</HashLink></li>
                        <li><Link to="/about" className="block text-sm px-2 py-4 hover:bg-red-800 transition duration-300">About</Link></li>
                        <li><Link to="/contact" className="block text-sm px-2 py-4 hover:bg-red-800 transition duration-300">Contact Us</Link></li>
                    </ul>
                </div> :
                    <div className="md:hidden mobile-menu">
                        <ul className="">
                            <li className=""><Link to="/home" className="block text-sm px-2 py-4 text-gray-200 hover:bg-red-800 font-md">Home</Link></li>
                            <li><HashLink to="/home#services" className="block text-sm px-2 py-4 hover:bg-red-800 transition duration-300">Services</HashLink></li>
                            <li><Link to="/about" className="block text-sm px-2 py-4 hover:bg-red-800 transition duration-300">About</Link></li>
                            <li><Link to="/contact" className="block text-sm px-2 py-4 hover:bg-red-800 transition duration-300">Contact Us</Link></li>

                        </ul>
                    </div>
            }
        </nav>
    );
};
export default Header;