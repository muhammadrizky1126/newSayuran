import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ProductList from '@/Components/User/Productlists';
import ProductDetail from '@/Components/User/ProductDetail';
import NavbarUser from '@/Components/User/NavbarUser';
import Footer from '@/Components/User/Footer';

const Layout = ({ children }) => {
  const location = useLocation();

  // Check if the user is on the product detail page
  const isProductDetailPage = location.pathname.startsWith('/product/');

  return (
    <>
      {!isProductDetailPage && <NavbarUser />}
      <main>{children}</main>
      {!isProductDetailPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
