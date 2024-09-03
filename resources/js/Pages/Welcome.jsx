import React, { useState } from 'react';
import NavbarUser from '@/Components/User/NavbarUser'; // Updated import to match the second code
import ProductList from '@/Components/User/Product'; // Assuming ProductList was renamed or moved
import Footer from '@/Components/User/Footer';

const AppLayout = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <NavbarUser onSearch={handleSearch} />
      <ProductList searchQuery={searchQuery} />
      <Footer />
    </div>
  );
};

export default AppLayout;
