import React from 'react';
import { Link } from '@inertiajs/react';

const NavbarAdmin = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <Link href={route('admin.users.index')} className="text-white text-lg">
                    User Management
                </Link>
                <Link href={route('dashboard')} className="ml-4 text-white text-lg">
                    Dashboard
                </Link>
            </div>
        </nav>
    );
};

export default NavbarAdmin;
