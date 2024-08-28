import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavbarUser from './NavbarUser';
import Banner from './Banner';

const products = [
    {
      id: 1,
      name: 'Organic Broccoli Sesa 300 Gr',
      category: 'Organic',
      originalPrice: 19900,
      discountedPrice: 17900,
      discount: '-10%',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Organic Green Spinach Sesa 200 Gr',
      category: 'Organic',
      price: 14900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Sesa Edamame 1 Kg',
      category: 'Natural',
      price: 24900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Natural Asparagus Sesa 250 Gr',
      category: 'Natural',
      price: 42900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Organic Carrots 500 Gr',
      category: 'Organic',
      price: 15900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Fresh Tomatoes 300 Gr',
      category: 'Hydroponics',
      price: 17900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      name: 'Organic Bell Peppers 200 Gr',
      category: 'Organic',
      price: 19900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      name: 'Natural Cucumbers 400 Gr',
      category: 'Natural',
      price: 13900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 9,
      name: 'Fresh Avocados 300 Gr',
      category: 'Natural',
      price: 24900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 10,
      name: 'Organic Lettuce 200 Gr',
      category: 'Organic',
      price: 12900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 11,
      name: 'Hydroponic Kale 250 Gr',
      category: 'Hydroponics',
      price: 21900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 12,
      name: 'Natural Carrots 500 Gr',
      category: 'Natural',
      price: 15900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 13,
      name: 'Organic Zucchini 300 Gr',
      category: 'Organic',
      price: 22900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 14,
      name: 'Fresh Red Onions 500 Gr',
      category: 'Natural',
      price: 19900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 15,
      name: 'Hydroponic Cherry Tomatoes 250 Gr',
      category: 'Hydroponics',
      price: 25900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 16,
      name: 'Natural Potatoes 1 Kg',
      category: 'Natural',
      price: 29900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 17,
      name: 'Organic Spinach 200 Gr',
      category: 'Organic',
      price: 14900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 18,
      name: 'Fresh Green Beans 300 Gr',
      category: 'Natural',
      price: 19900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 19,
      name: 'Hydroponic Butterhead Lettuce 150 Gr',
      category: 'Hydroponics',
      price: 15900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 20,
      name: 'Organic Bok Choy 200 Gr',
      category: 'Organic',
      price: 16900,
      image: 'https://via.placeholder.com/150',
    },
    // Tambahkan lebih banyak produk jika diperlukan...
  ];

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showDiscountedOnly, setShowDiscountedOnly] = useState(false);
  const itemsPerPage = 16;

  const handleFilterChange = (category) => {
    if (selectedFilters.includes(category)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== category));
    } else {
      setSelectedFilters([...selectedFilters, category]);
    }
  };

  const handleDiscountChange = () => {
    setShowDiscountedOnly(!showDiscountedOnly);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedFilters.length === 0 || selectedFilters.includes(product.category);
    const matchesDiscount = !showDiscountedOnly || product.discountedPrice;
    return matchesCategory && matchesDiscount;
  });

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
        <Banner />
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/4 p-2 border-r lg:sticky lg:top-0 bg-white mb-4 lg:mb-0">
            <h2 className="font-semibold mb-2 text-sm">FILTER</h2>
            <label className="block mb-1 text-sm">
              <input
                type="checkbox"
                className="mr-1"
                checked={selectedFilters.includes('Organic')}
                onChange={() => handleFilterChange('Organic')}
              /> Organic
            </label>
            <label className="block mb-1 text-sm">
              <input
                type="checkbox"
                className="mr-1"
                checked={selectedFilters.includes('Hydroponics')}
                onChange={() => handleFilterChange('Hydroponics')}
              /> Hydroponics
            </label>
            <label className="block mb-1 text-sm">
              <input
                type="checkbox"
                className="mr-1"
                checked={selectedFilters.includes('Natural')}
                onChange={() => handleFilterChange('Natural')}
              /> Natural
            </label>
            <label className="block mb-1 text-sm">
              <input
                type="checkbox"
                className="mr-1"
                checked={showDiscountedOnly}
                onChange={handleDiscountChange}
              /> Show Discounted Only
            </label>
          </div>
          <div className="w-full lg:w-3/4 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentProducts.map((product) => (
                <div key={product.id} className="border p-4 rounded-lg">
                  <img src={product.image} alt={product.name} className="mb-2 w-full h-32 object-cover" />
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  {product.discountedPrice ? (
                    <div className="mt-2">
                      <span className="line-through text-red-500 text-sm">Rp. {product.originalPrice}</span>
                      <span className="text-green-500 font-bold text-sm"> {product.discount} Rp. {product.discountedPrice}</span>
                    </div>
                  ) : (
                    <p className="mt-2 text-sm">Rp. {product.price}</p>
                  )}
                  <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded text-sm">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
            {/* Pagination Controls */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-l disabled:opacity-50"
              >
                Previous
              </button>
              <span className="bg-white border-t border-b px-4 py-2">
                {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;
