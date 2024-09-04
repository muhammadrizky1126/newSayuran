import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

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

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      // Set recommended products here; for now, just a placeholder
      setRecommendedProducts(products.filter((p) => p.category === foundProduct.category && p.id !== foundProduct.id));
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
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
