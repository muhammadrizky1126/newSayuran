import React from 'react';

const ProductDetail = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex">
        <div className="w-1/2">
          <img
            src="https://sesa.id/cdn/shop/files/Bayam-Hijau-Organik-1-removebg-preview.png?v=1683031234"
            alt="Organic Green Spinach"
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2 pl-6">
          <h1 className="text-2xl font-bold">Organic Green Spinach Sesa 200 Gr</h1>
          <p className="text-gray-600">Brand: SESA</p>
          <h2 className="text-xl font-semibold mt-4">Rp. 14,900</h2>
          <div className="flex items-center mt-4">
            <button className="border border-gray-300 rounded-l px-4 py-2">-</button>
            <span className="border-t border-b border-gray-300 px-4 py-2">1</span>
            <button className="border border-gray-300 rounded-r px-4 py-2">+</button>
            <span className="ml-4">Stock: 1</span>
          </div>
          <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
            + Cart
          </button>
          <p className="mt-4">
            Spinach is a type of vegetable that is easy to process for everyday food ranging from soup, stir-fry, to gado-gado and has a myriad of benefits for the body. Spinach is known as a low-calorie and high-fiber vegetable. Our spinach is grown organically on pollutant-free land, without using pesticides or other artificial fertilizers.
          </p>
          <p className="mt-4 font-semibold">Storage Method: Store at a temperature of 1-4°C</p>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-8">You may also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {[
          { name: 'Organic Pakcoy Sesa 200 Gr', price: 'Rp. 9,900', discount: '-34%', img: 'https://via.placeholder.com/150' },
          { name: 'Sesa Baby Pakcoy Organic 200 Gr', price: 'Rp. 12,900', discount: '-13%', img: 'https://via.placeholder.com/150' },
          { name: 'Organic Water Spinach 200 Gr', price: 'Rp. 14,900', img: 'https://via.placeholder.com/150' },
          { name: 'Organic Kailan Sesa 200 Gr', price: 'Rp. 14,900', img: 'https://via.placeholder.com/150' },
          { name: 'Sesa Tomat Tw Organic 500 Gr', price: 'Rp. 26,900', img: 'https://via.placeholder.com/150' },
        ].map((product, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <img src={product.img} alt={product.name} className="w-full h-auto mb-2" />
            <h3 className="font-semibold">{product.name}</h3>
            {product.discount && <span className="text-red-500">{product.discount}</span>}
            <p className="font-bold">{product.price}</p>
            <button className="mt-2 bg-green-500 text-white py-1 px-3 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
