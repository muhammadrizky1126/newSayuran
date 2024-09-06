import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Data produk (contoh data)
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
  // Tambahkan data produk lainnya sesuai kebutuhan
];

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    // Temukan produk berdasarkan ID dari URL
    const foundProduct = products.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      // Set produk rekomendasi berdasarkan kategori produk saat ini
      setRecommendedProducts(products.filter((p) => p.category === foundProduct.category && p.id !== foundProduct.id));
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Tampilkan loading jika produk belum ditemukan
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          {product.discountedPrice ? (
            <div className="mb-4">
              <span className="line-through text-red-500 text-xl">
                Rp. {product.originalPrice}
              </span>
              <span className="text-green-600 font-bold text-xl ml-2">
                {product.discount} Rp. {product.discountedPrice}
              </span>
            </div>
          ) : (
            <p className="text-xl font-bold mb-4">Rp. {product.price}</p>
          )}
          <div className="flex items-center">
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
      <hr className="my-8 border-gray-300" />
      <div>
        <h2 className="text-2xl font-semibold mb-4">Recommended Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((recommendedProduct) => (
            <div
              key={recommendedProduct.id}
              className="border border-gray-200 p-4 rounded-lg shadow hover:shadow-md transition duration-300"
            >
              <Link to={`/product/${recommendedProduct.id}`}>
                <img
                  src={recommendedProduct.image}
                  alt={recommendedProduct.name}
                  className="mb-4 w-full h-40 object-cover rounded"
                />
                <h3 className="font-semibold text-md text-gray-800">
                  {recommendedProduct.name}
                </h3>
              </Link>
              {recommendedProduct.discountedPrice ? (
                <div className="mt-2">
                  <span className="line-through text-red-500 text-sm">
                    Rp. {recommendedProduct.originalPrice}
                  </span>
                  <span className="text-green-600 font-bold text-sm ml-2">
                    {recommendedProduct.discount} Rp. {recommendedProduct.discountedPrice}
                  </span>
                </div>
              ) : (
                <p className="mt-2 text-gray-800 font-bold">
                  Rp. {recommendedProduct.price}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
