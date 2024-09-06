import React from 'react';
import Navbar from '@/Components/User/NavbarUser';
import Product from '@/Components/User/Product';
import Footer from '@/Components/User/Footer';
import Sidebar from '@/Components/User/SidebarUser'; // Ensure this import path is correct

// Remove this line to avoid conflict
// import AppLayout from '@/Layouts/AppLayout';

const AppLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <Navbar />
        <Product />
        {children} {/* Render children if needed */}
        <Footer />
      </div>
      {/* Sidebar */}
      <Sidebar />
    </div>
  );
};

export default AppLayout;
