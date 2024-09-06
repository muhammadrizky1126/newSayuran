import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from '@/Components/User/ProductList';
import ProductDetail from '@/Components/User/ProductDetail';
import NavbarUser from '@/Components/User/NavbarUser';
import Footer from '@/Components/User/Footer';
import Sidebar from '@/Components/User/SidebarUser'; // Ensure this import path is correct

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



export default App;
