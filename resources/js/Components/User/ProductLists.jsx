import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios untuk request ke API
import { Link, useNavigate } from "react-router-dom";
import SidebarUser from "./SidebarUser";
import Banner from "./Banner";

const ProductList = () => {
    const [products, setProducts] = useState([]); // Daftar produk
    const [currentPage, setCurrentPage] = useState(1); // Halaman saat ini
    const [selectedFilters, setSelectedFilters] = useState([]); // Filter kategori yang dipilih
    const [showDiscountedOnly, setShowDiscountedOnly] = useState(false); // Filter diskon
    const [cartItems, setCartItems] = useState([]); // Daftar produk di keranjang
    const [whitelistItems, setWhitelistItems] = useState([]); // Daftar produk di whitelist
    const [sidebarOpen, setSidebarOpen] = useState(false); // Status sidebar
    const [categories, setCategories] = useState([]); // Daftar kategori unik
    const navigate = useNavigate();

    const itemsPerPage = 16;

    // Mengambil data produk dan whitelist items
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/products")
            .then(response => {
                setProducts(response.data);
                // Ambil kategori unik dari produk
                const uniqueCategories = Array.from(new Set(response.data.map(product => product.category)));
                setCategories(uniqueCategories);
            })
            .catch(error => {
                console.error("There was an error fetching the products:", error);
            });

        // Ambil data whitelist items pengguna
        axios.get("http://127.0.0.1:8000/whitelist")
            .then(response => {
                setWhitelistItems(response.data.map(item => item.product_id));
            })
            .catch(error => {
                console.error("There was an error fetching the whitelist items:", error);
            });
    }, []); // Efek hanya dijalankan sekali setelah pertama kali render

    // Menangani perubahan filter kategori
    const handleFilterChange = (category) => {
        if (selectedFilters.includes(category)) {
            setSelectedFilters(selectedFilters.filter((filter) => filter !== category));
        } else {
            setSelectedFilters([...selectedFilters, category]);
        }
        setCurrentPage(1); // Reset ke halaman pertama ketika filter berubah
    };

    // Menangani perubahan checkbox diskon
    const handleDiscountChange = () => {
        setShowDiscountedOnly(!showDiscountedOnly);
        setCurrentPage(1); // Reset ke halaman pertama ketika filter berubah
    };

    // Filter produk berdasarkan kategori dan diskon
    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedFilters.length === 0 || selectedFilters.includes(product.category);
        const matchesDiscount = !showDiscountedOnly || product.discountedPrice;
        return matchesCategory && matchesDiscount;
    });

    // Pagination
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

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
        setSidebarOpen(true);
    };

    // Menambahkan atau menghapus produk dari whitelist
    const addToWhitelist = (product) => {
        const action = whitelistItems.includes(product.id) ? "remove" : "add"; // Tentukan apakah akan menambah atau menghapus
    
        axios.post("http://127.0.0.1:8000/whitelist/toggle-favorite", {
            product_id: product.id,
            action: action
        }, {
            withCredentials: true // Pastikan cookies dikirimkan
        })
        .then(response => {
            console.log("Response:", response.data);
        })
        .catch(error => {
            console.error("Error:", error);
        })
        
        .then(response => {
            // Jika produk berhasil ditambahkan atau dihapus dari whitelist
            if (action === "add") {
                setWhitelistItems((prevItems) => [...prevItems, product.id]);
            } else {
                setWhitelistItems((prevItems) => prevItems.filter((item) => item !== product.id));
            }
            navigate('/wishlist'); // Navigate ke halaman Wishlist
        })
        .catch(error => {
            console.error("There was an error updating the whitelist:", error);
        });
    };
    

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            <Banner />
            <SidebarUser
                isOpen={sidebarOpen}
                toggleSidebar={toggleSidebar}
                cartItems={cartItems}
                whitelistItems={whitelistItems}
            />
            <hr className="my-4 border-gray-300" />
            <div className="container mx-auto p-4">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/4 p-4 border-r border-gray-300 mb-4 lg:mb-0">
                        <h2 className="font-semibold mb-4 text-lg">Category Sayur</h2>
                        <div className="mb-4">
                            <h3 className="font-medium mb-2">Filter</h3>
                            <div className="flex flex-col">
                                {categories.map((category) => (
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
                                                alt={product.product_name}
                                                className="mb-4 w-full h-40 object-cover rounded"
                                            />
                                            <h3 className="font-semibold text-md text-gray-800">
                                                {product.product_name}
                                            </h3>
                                        </Link>
                                        {product.discountedPrice ? (
                                            <div className="mt-2">
                                                <span className="line-through text-red-500 text-sm">
                                                    Rp. {product.originalPrice}
                                                </span>
                                                <span className="text-green-600 font-bold text-sm ml-2">
                                                    {product.discount} Rp.{" "}
                                                    {product.discountedPrice}
                                                </span>
                                            </div>
                                        ) : (
                                            <p className="mt-2 text-gray-800 font-bold">
                                                Rp. {product.price}
                                            </p>
                                        )}
                                        <div className="flex items-center justify-start mt-4 space-x-4">
                                            <button
                                                className={`bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 ${
                                                    product.stock === 0
                                                        ? "opacity-50 cursor-not-allowed"
                                                        : ""
                                                }`}
                                                disabled={product.stock === 0}
                                                onClick={() => {
                                                    addToCart(product);
                                                }}
                                            >
                                                {product.stock === 0 ? (
                                                    "Sold Out"
                                                ) : (
                                                    <img
                                                        src="https://img.icons8.com/?size=100&id=15893&format=png&color=FFFFFF"
                                                        alt="Add to Cart"
                                                        className="h-6 w-6 mx-auto"
                                                    />
                                                )}
                                            </button>
                                            <button
                                                className={`p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300 ${
                                                    whitelistItems.includes(product.id)
                                                        ? "bg-red-500 hover:bg-red-600"
                                                        : ""
                                                }`}
                                                onClick={() => addToWhitelist(product)}
                                            >
                                                <img
                                                    src="https://img.icons8.com/ios/50/000000/like--v1.png"
                                                    alt="Whitelist"
                                                    className="h-6 w-6"
                                                />
                                            </button>
                                        </div>  
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500">
                                No products found.
                            </p>
                        )}
                        <div className="flex justify-between mt-4">
                            <button
                                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <button
                                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
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

export default ProductList;
