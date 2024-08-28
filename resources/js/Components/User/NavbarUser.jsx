import React from 'react';
import { Link } from '@inertiajs/react';

const NavbarUser = () => {
    return (
        <>
            <nav className="bg-white shadow w-full fixed top-0 left-0 z-50">
                {/* Main container with full-width background */}
                <div className="w-full bg-teal-500 flex flex-col md:flex-row justify-between items-center p-5">
                    {/* Logo and WhatsApp CS */}
                    <div className="flex items-center space-x-4">
                        {/* Logo */}
                        <span className="text-5xl font-bold text-white text-center md:text-left">sesa.id</span>

                        {/* Vertical line separator */}
                        <div className="border-r border-white h-8"></div>

                        {/* WhatsApp CS */}
                        <div className="flex flex-col items-center space-y-1">
                            <div className="flex items-center space-x-2">
                                <img
                                    src="https://img.icons8.com/?size=100&id=LwCcDAb8qdY1&format=png&color=FFFFFF"
                                    alt="WhatsApp Icon"
                                    className="h-6 w-6"
                                />
                                <span className="text-white font-medium">WhatsApp CS</span>
                            </div>
                            {/* Phone Number */}
                            <span className="text-sm text-white">+62 812-3456-7890</span>
                        </div>
                    </div>

                    {/* Search bar in the center */}
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <div className="relative w-full max-w-md">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="px-4 py-2 rounded-full border border-gray-300 pl-10 w-full"
                            />
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <img
                                    src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000"
                                    alt="Search Icon"
                                    className="h-5 w-5 text-gray-500"
                                />
                            </span>
                        </div>
                    </div>

                    {/* Icons section */}
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <Link href="/favorit" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                            <img src="https://img.icons8.com/?size=100&id=86721&format=png&color=FFFFFF" alt="Icon Favorit" className="h-8 w-8" />
                        </Link>
                        <Link href="/keranjang" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                            <img src="https://img.icons8.com/?size=100&id=15893&format=png&color=FFFFFF" alt="Icon Cart" className="h-8 w-8" />
                        </Link>
                        <Link href="/login.jsx" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                            <img src="https://img.icons8.com/?size=100&id=YXG86oegZMMh&format=png&color=FFFFFF" alt="Icon Login" className="h-8 w-8" />
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Spacer div to prevent content overlap */}
            <div className="h-28"></div>
        </>
    );
};

export default NavbarUser;
