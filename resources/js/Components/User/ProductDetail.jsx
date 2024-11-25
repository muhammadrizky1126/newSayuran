import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios
import NavbarUser from "./NavbarUser";
import SidebarUser from "./SidebarUser";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [product, setProduct] = useState(null);
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [whitelistItems, setWhitelistItems] = useState([]);

    // Ambil data produk berdasarkan ID
    useEffect(() => {
        // Ambil data produk dari API Laravel
        axios
            .get(`http://127.0.0.1:8000/products/${id}`)  // URL API Laravel
            .then((response) => {
                const fetchedProduct = response.data;
                setProduct(fetchedProduct);

                // Ambil produk rekomendasi berdasarkan kategori
                axios
                    .get("http://127.0.0.1:8000/products") // Ambil semua produk
                    .then((response) => {
                        const allProducts = response.data;
                        const relatedProducts = allProducts.filter(
                            (p) => p.category === fetchedProduct.category && p.id !== fetchedProduct.id
                        );
                        setRecommendedProducts(relatedProducts);
                    })
                    .catch((error) => {
                        console.error("Error fetching recommended products:", error);
                    });
            })
            .catch((error) => {
                console.error("Error fetching product data:", error);
            });
    }, [id]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
        setSidebarOpen(true);
    };

    const addToWhitelist = (product) => {
        if (whitelistItems.includes(product.id)) {
            setWhitelistItems((prevItems) =>
                prevItems.filter((item) => item !== product.id)
            );
        } else {
            setWhitelistItems((prevItems) => [...prevItems, product.id]);
        }
        navigate("/wishlist"); // Navigate to Wishlist page
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const increaseQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto">
            <NavbarUser />
            <SidebarUser
                isOpen={sidebarOpen}
                toggleSidebar={toggleSidebar}
                cartItems={cartItems}
            />
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 p-4">
                    <img
                        src={product.image}
                        alt={product.product_name}
                        className="w-full h-604 object-cover rounded"
                    />
                </div>
                <div className="w-full lg:w-1/2 p-4">
                    <h1 className="text-3xl font-semibold mb-2">
                        {product.product_name}
                    </h1>
                    <p className="text-gray-700 text-lg mb-4">{product.description}</p>
                    <div className="flex items-center mb-4">
                        <p className="text-sm text-gray-500 mr-4">Brand:</p>
                        <button
                            className="p-2 rounded-full hover:bg-gray-100 transition duration-300"
                        >
                            <img
                                src="https://img.icons8.com/ios/50/000000/share.png"
                                alt="Share"
                                className="h-6 w-6"
                            />
                        </button>
                        <button
                            className={`p-2 rounded-full hover:bg-gray-100 transition duration-300 mr-2 ${
                                whitelistItems.includes(product.id)
                                    ? "bg-red-500 hover:bg-red-600"
                                    : ""
                            }`}
                            onClick={() => addToWhitelist(product)}
                        >
                            <img
                                src="https://img.icons8.com/ios/50/000000/like--v1.png"
                                alt="Like"
                                className="h-6 w-6"
                            />
                        </button>
                    </div>
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
                        <p className="text-3xl font-bold mb-4">
                            Rp. {product.price}
                        </p>
                    )}
                    <div className="flex items-center mb-4">
                        <p className="text-lg mr-2">Kuantitas</p>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                                className="px-3 py-1 text-lg"
                                onClick={decreaseQuantity}
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <span className="px-4 py-1 text-lg">{quantity}</span>
                            <button
                                className="px-3 py-1 text-lg"
                                onClick={increaseQuantity}
                                disabled={quantity >= product.stock}
                            >
                                +
                            </button>
                        </div>
                        <p className="text-lg ml-4">Stok: {product.stock}</p>
                    </div>
                    <button
                        className={`bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 ${
                            product.stock === 0
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                        }`}
                        disabled={product.stock === 0}
                        onClick={() => addToCart(product)}
                    >
                        + Keranjang
                    </button>
                </div>
            </div>
            <hr className="my-8 border-gray-300" />
            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    Produk Rekomendasi
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {recommendedProducts.map((recommendedProduct) => (
                        <div                
                            key={recommendedProduct.id}
                            className="border border-gray-200 p-4 rounded-lg shadow hover:shadow-md transition duration-300"
                        >
                            <Link to={`/product/${recommendedProduct.id}`}>
                                <img
                                    src={recommendedProduct.image}
                                    alt={recommendedProduct.product_name}
                                    className="mb-4 w-full h-40 object-cover rounded"
                                />
                                <h3 className="font-semibold text-md text-gray-800">
                                    {recommendedProduct.product_name}
                                </h3>
                            </Link>
                            {recommendedProduct.discountedPrice ? (
                                <div className="mt-2">
                                    <span className="line-through text-red-500 text-sm">
                                        Rp. {recommendedProduct.originalPrice}
                                    </span>
                                    <span className="text-green-600 font-bold text-sm ml-2">
                                        {recommendedProduct.discount} Rp.{" "}
                                        {recommendedProduct.discountedPrice}
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
