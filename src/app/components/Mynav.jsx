"use client"
import React, { useState } from 'react';

const Mynav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white py-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <span><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.5299 14.2118C31.5299 18.8819 28.7628 22.9082 24.7798 24.7351C26.4617 23.3497 27.5327 21.248 27.5327 18.896C27.5327 14.7642 24.2264 11.4042 20.1125 11.3205C20.0579 11.3167 20.008 11.3167 19.9534 11.3167C19.8988 11.3167 19.849 11.3167 19.7944 11.3205C18.2678 11.4033 17.0593 12.6664 17.0593 14.2108V28.6814C17.0593 33.4748 13.1704 37.3638 8.37695 37.3638V14.2118C8.37695 7.8193 13.561 2.6353 19.9534 2.6353C26.3459 2.6353 31.5299 7.8193 31.5299 14.2118Z" fill="black" />
                            <path d="M21.9987 16.2582C23.1289 15.128 23.1289 13.2956 21.9987 12.1654C20.8685 11.0351 19.036 11.0351 17.9058 12.1654C16.7756 13.2956 16.7756 15.128 17.9058 16.2582C19.036 17.3884 20.8685 17.3884 21.9987 16.2582Z" fill="black" />
                        </svg>
                        </span>
                        <a href="/" className="text-black text-xl font-bold ff-sora">Personal</a>
                    </div>
                    <div className="sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-black focus:outline-none focus:text-black"
                        >
                            <svg className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            <svg className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden sm:block">
                        <ul className="flex space-x-4">
                            <li><a href="#" className="text-black text-xl ff-sora font-semibold">Home</a></li>
                            <li><a href="#" className="text-black text-xl font-semibold">About</a></li>
                            <li><a href="#" className="text-black text-xl font-semibold">Services</a></li>
                            <li><a href="#" className="text-black text-xl font-semibold">Contact</a></li>
                        </ul>
                    </div>
                    <div className='flex gap-1 items-center py-4 px-5 cursor-pointer bg-black rounded-[4px]'>
                        <p className='text-white text-xl ff-sora font-semibold'>Resume</p>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 11.5V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V11.5M13.1667 7.33333L9 11.5M9 11.5L4.83333 7.33333M9 11.5V1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="py-2 px-4 space-y-2">
                    <li><a href="#" className="block text-black text-xl font-semibold ff-sora">Home</a></li>
                    <li><a href="#" className="block text-black text-xl font-semibold ff-sora">About</a></li>
                    <li><a href="#" className="block text-black text-xl font-semibold ff-sora">Services</a></li>
                    <li><a href="#" className="block text-black text-xl font-semibold ff-sora">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Mynav;