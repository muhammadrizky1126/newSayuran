import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import SidebarUser from './SidebarUser'; // Ensure this import path is correct

import Banner from './Banner';

// Data produk
// Data produk
const products = [
  {
    id: 1,
    name: 'Organic Broccoli Sesa 300 Gr',
    category: 'Organic',
    originalPrice: 19900,
    discountedPrice: 17900,
    discount: '-10%',
    image: 'https://images.squarespace-cdn.com/content/v1/5b5aa0922487fd1ce32c117a/1547765015801-FSR1DVSKCZU3PAYWIRQG/broccoli.jpg',
    stock: Math.floor(Math.random() * 20),
    description: 'Fresh and organic broccoli, perfect for a healthy diet. Rich in vitamins and minerals.',
  },
  {
    id: 2,
    name: 'Organic Green Spinach Sesa 200 Gr',
    category: 'Organic',
    price: 14900,
    image: 'https://www.greendna.in/cdn/shop/products/English_Spinach__67562_425x.jpg?v=1607938113',
    stock: Math.floor(Math.random() * 3),
    description: 'Nutritious green spinach, great for salads and cooking. Packed with antioxidants and vitamins.',
  },
  {
    id: 3,
    name: 'Edamame 1 Kg',
    category: 'Natural',
    price: 24900,
    image: 'https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/0LaNSoINv6RtFWYxco8i4/original/057936200_1604487548-Manfaat-Kacang-Edamame-untuk-Kecantikan-shutterstock_718434649.jpg',
  },
  {
    id: 4,
    name: 'Natural Asparagus Sesa 250 Gr',
    category: 'Natural',
    price: 42900,
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/NC/IE/AC/140389828/jivit-asparagus-large-leaf-500x500.jpeg',
  },
  {
    id: 5,
    name: 'Organic Carrots 500 Gr',
    category: 'Organic',
    price: 15900,
    image: 'https://leafy.id/wp-content/uploads/2019/12/p9.jpg',
  },
  {
    id: 6,
    name: 'Fresh Tomatoes 300 Gr',
    category: 'Hydroponics',
    price: 17900,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg',
  },
  {
    id: 7,
    name: 'Organic Bell Peppers 200 Gr',
    category: 'Organic',
    price: 19900,
    image: 'https://cdn.britannica.com/12/147312-050-BEC6A59E/Bell-peppers.jpg',
  },
  {
    id: 8,
    name: 'Natural Cucumbers 400 Gr',
    category: 'Natural',
    price: 13900,
    image: 'https://specialtyproduce.com/sppics/385.png',
  },
  {
    id: 9,
    name: 'Fresh Kangkung 300 Gr',
    category: 'Natural',
    price: 24900,
    image: 'https://asset.kompas.com/crops/hiHp3YQ3thc3pKgLg-rUdaI-OR8=/0x0:1000x667/750x500/data/photo/2023/06/02/6479fd6c38b10.jpg',
  },
  {
    id: 10,
    name: 'Organic Lettuce 200 Gr',
    category: 'Organic',
    price: 12900,
    image: 'https://media.newyorker.com/photos/5b6b08d3a676470b4ea9b91f/4:3/w_1920,h_1440,c_limit/Rosner-Lettuce.jpg',
  },
  {
    id: 11,
    name: 'Hydroponic Kale 250 Gr',
    category: 'Hydroponics',
    price: 21900,
    image: 'https://cdn1-production-images-kly.akamaized.net/SCV68Bza6ZegWzOmTv2-WgSUbSM=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2814106/original/062756400_1558620545-iStock-638451058.jpg',
  },
  {
    id: 12,
    name: 'Natural Carrots 500 Gr',
    category: 'Natural',
    price: 15900,
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/6/KH/AX/XT/83716376/1-500x500.png',
  },
  {
    id: 13,
    name: 'Organic Zucchini 300 Gr',
    category: 'Organic',
    price: 22900,
    image: 'https://images.tokopedia.net/img/cache/700/product-1/2018/8/30/37313461/37313461_65ce0650-5d77-45dd-88cf-fff01b9c1189_843_583.jpg',
  },
  {
    id: 14,
    name: 'Fresh Red Onions 500 Gr',
    category: 'Natural',
    price: 19900,
    image: 'https://produits.bienmanger.com/36700-0w0h0_Organic_Red_Onion_From_Italy.jpg',
  },
  {
    id: 15,
    name: 'Hydroponic Cherry Tomatoes 250 Gr',
    category: 'Hydroponics',
    price: 25900,
    image: 'https://cdn.shopify.com/s/files/1/0597/9376/8608/files/hydroponic_cherry_tomatoes_system_1024x1024.jpg?v=1685696663',
  },
  {
    id: 16,
    name: 'Natural Potatoes 1 Kg',
    category: 'Natural',
    price: 29900,
    image: 'https://iloveorganicgirl.com/wp-content/uploads/2015/11/organicgirl-baby-spinach-5oz.png',
  },
  {
    id: 17,
    name: 'Organic Spinach 200 Gr',
    category: 'Organic',
    price: 14900,
    image: 'https://www.gardenoflife.com/media/2016/06/organic-spinach-499x392.jpg',
  },
  {
    id: 18,
    name: 'Fresh Green Beans 300 Gr',
    category: 'Natural',
    price: 19900,
    image: 'https://cdn.loveandlemons.com/wp-content/uploads/2014/11/green-beans-3.jpg',
  },
  {
    id: 19,
    name: 'Hydroponic Butterhead Lettuce 150 Gr',
    category: 'Hydroponics',
    price: 15900,
    image: 'https://yodeli.in/cdn/shop/products/truganic-organic-green-leafy-vegetables-hydroponic-butterhead-lettuce.jpg?v=1614567537',
  },
  {
    id: 20,
    name: 'Organic Bok Choy 200 Gr',
    category: 'Organic',
    price: 16900,
    image: 'https://dinosaofood.co/wp-content/uploads/2022/02/BokChoy-Thumbnail-OG.png',
  },
];

const ProductList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [showDiscountedOnly, setShowDiscountedOnly] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const itemsPerPage = 16;

    const handleFilterChange = (category) => {
      if (selectedFilters.includes(category)) {
        setSelectedFilters(selectedFilters.filter((filter) => filter !== category));
      } else {
        setSelectedFilters([...selectedFilters, category]);
      }
      setCurrentPage(1); // Reset to first page when filters change
    };

    const handleDiscountChange = () => {
      setShowDiscountedOnly(!showDiscountedOnly);
      setCurrentPage(1); // Reset to first page when filters change
    };

    const filteredProducts = products.filter((product) => {
      const matchesCategory =
        selectedFilters.length === 0 || selectedFilters.includes(product.category);
      const matchesDiscount = !showDiscountedOnly || product.discountedPrice;
      return matchesCategory && matchesDiscount;
    });

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

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

    const addToCart = (product) => {
      setCartItems((prevItems) => [...prevItems, product]);
    };

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    return (
      <div>
        <Banner />
        <SidebarUser isOpen={sidebarOpen} toggleSidebar={toggleSidebar} cartItems={cartItems} /> {/* Ensure correct usage */}
        <hr className="my-4 border-gray-300" />
        <div className="container mx-auto p-4">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/4 p-4 border-r border-gray-300 mb-4 lg:mb-0">
              <h2 className="font-semibold mb-4 text-lg">Filter</h2>
              <div className="mb-4">
                <h3 className="font-medium mb-2">Category</h3>
                <div className="flex flex-col">
                  {['Organic', 'Natural', 'Hydroponics'].map((category) => (
                    <label key={category} className="inline-flex items-center mb-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-green-600"
                        checked={selectedFilters.includes(category)}
                        onChange={() => handleFilterChange(category)}
                      />
                      <span className="ml-2 text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Discount</h3>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-green-600"
                    checked={showDiscountedOnly}
                    onChange={handleDiscountChange}
                  />
                  <span className="ml-2 text-gray-700">Show Discounted Only</span>
                </label>
              </div>
            </div>
            <div className="w-full lg:w-3/4 p-4">
              {currentProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {currentProducts.map((product) => (
                    <div
                      key={product.id}
                      className="border border-gray-200 p-4 rounded-lg shadow hover:shadow-md transition duration-300"
                    >
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="mb-4 w-full h-40 object-cover rounded"
                        />
                        <h3 className="font-semibold text-md text-gray-800">{product.name}</h3>
                      </Link>
                      {product.discountedPrice ? (
                        <div className="mt-2">
                          <span className="line-through text-red-500 text-sm">
                            Rp. {product.originalPrice}
                          </span>
                          <span className="text-green-600 font-bold text-sm ml-2">
                            {product.discount} Rp. {product.discountedPrice}
                          </span>
                        </div>
                      ) : (
                        <p className="mt-2 text-gray-800 font-bold">
                          Rp. {product.price}
                        </p>
                      )}
                      <div className="flex items-center justify-start mt-4">
                        <button
                          className={`bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 ${
                            product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          disabled={product.stock === 0}
                          onClick={() => {
                            addToCart(product);
                            toggleSidebar(); // Open sidebar when product is added
                          }}
                        >
                          {product.stock === 0 ? (
                            'Sold Out'
                          ) : (
                            <span className="flex items-center">
                              Add to Cart
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <p>No products found matching your criteria.</p>
                </div>
              )}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center items-center space-x-4">
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

// Komponen Detail Produk
// Komponen Detail Produk
const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  // Filter produk rekomendasi berdasarkan kategori produk saat ini
  const recommendedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4); // Ambil 4 produk rekomendasi

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <p className="text-lg mb-4 text-gray-700">{product.description}</p>
          <div className="flex items-center mb-4">
            {product.discountedPrice ? (
              <>
                <span className="line-through text-red-500 text-lg">
                  Rp. {product.originalPrice}
                </span>
                <span className="text-green-600 font-bold text-lg ml-4">
                  {product.discount} Rp. {product.discountedPrice}
                </span>
              </>
            ) : (
              <p className="text-lg font-bold text-gray-800">
                Rp. {product.price}
              </p>
            )}
          </div>
          <div className="flex items-center mt-4">
            <button
              className={`bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 ${
                product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? 'Sold Out' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>

      {/* Rekomendasi Produk */}
      {recommendedProducts.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((recProduct) => (
              <div
                key={recProduct.id}
                className="border border-gray-200 p-4 rounded-lg shadow hover:shadow-md transition duration-300"
              >
                <Link to={`/product/${recProduct.id}`}>
                  <img
                    src={recProduct.image}
                    alt={recProduct.name}
                    className="mb-4 w-full h-40 object-cover rounded"
                  />
                  <h3 className="font-semibold text-md text-gray-800">{recProduct.name}</h3>
                </Link>
                {recProduct.discountedPrice ? (
                  <div className="mt-2">
                    <span className="line-through text-red-500 text-sm">
                      Rp. {recProduct.originalPrice}
                    </span>
                    <span className="text-green-600 font-bold text-sm ml-2">
                      {recProduct.discount} Rp. {recProduct.discountedPrice}
                    </span>
                  </div>
                ) : (
                  <p className="mt-2 text-gray-800 font-bold">
                    Rp. {recProduct.price}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


// App utama
const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
