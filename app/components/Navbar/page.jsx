"use client"
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white relative">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className=" flex items-center justify-center h-20">
                    <div className="flex items-center justify-center sm:w-full">
                        <div className="hidden md:block w-full">
                            <div className="ml-10 flex items-center justify-center space-x-6 w-full font-regular">
                                <a href="#" className="text-gray-700  hover:text-pink-700   px-3 py-2 rounded-md text-sm ">What's New</a>
                                <a href="#" className="text-gray-700  hover:text-pink-700  px-3 py-2 rounded-md text-sm ">Lifestyle</a>
                                <a href="#" className="text-gray-700  hover:text-pink-700  px-3 py-2 rounded-md text-sm ">Travel</a>
                                <a href="#" className="text-gray-700  hover:text-pink-700  px-3 py-2 rounded-md text-sm ">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center md:hidden">
                        <div className="flex-shrink-0 mr-2">
                            <h1 className="text-gray-600 font-bold">Menu</h1>
                        </div>
                        <button onClick={toggleMenu} className="text-gray-700 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-xl">
                            <span className="sr-only">Open menu</span>
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <>

                    <div className="md:hidden absolute top-14 bg-gray-50 right-0 left-0">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#" className="text-gray-600 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                            <a href="#" className="text-gray-600 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
                            <a href="#" className="text-gray-600 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
                            <a href="#" className="text-gray-600 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                        </div>
                    </div>
                </>

            )}
        </nav>
    );
};

export default Navbar;
