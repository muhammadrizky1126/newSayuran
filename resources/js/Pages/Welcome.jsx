import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from '@/Components/User/ProductList';
import ProductDetail from '@/Components/User/ProductDetail';
import NavbarUser from '@/Components/User/NavbarUser';
import Footer from '@/Components/User/Footer';
import Sidebar from '@/Components/User/SidebarUser'; // Ensure this import path is correct

<<<<<<< HEAD
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
=======
const App = () => {
    return (
      <Router>
        <NavbarUser />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Router>
    );
  };
>>>>>>> 136ad329314431edea17d2015b442b578eee6368


export default App;
