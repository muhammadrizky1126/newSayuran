
import React from 'react';
import Navbar from '@/Components/User/NavbarUser';
import Product from '@/Components/User/Product';
import Footer from '@/Components/User/Footer';

const AppLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Product />
            <Footer />
            <main>
                {children}
            </main>
        </div>
    );
};

export default AppLayout;
