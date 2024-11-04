import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SidebarUser from "./SidebarUser"; // Ensure this import path is correct
import Banner from "./Banner";

// Data produk
const products = [
    {
        id: 1,
        name: "Brokoli Organik Sesa 300 Gr",
        category: "Organik",
        originalPrice: 19900,
        discountedPrice: 17900,
        discount: "-10%",
        image: "https://images.squarespace-cdn.com/content/v1/5b5aa0922487fd1ce32c117a/1547765015801-FSR1DVSKCZU3PAYWIRQG/broccoli.jpg",
        stock: Math.floor(Math.random() * 20),
        description: "Brokoli segar dan organik, sempurna untuk diet sehat. Kaya akan vitamin dan mineral.",
    },
    {
        id: 2,
        name: "Bayam Hijau Organik Sesa 200 Gr",
        category: "Organik",
        price: 14900,
        image: "https://www.greendna.in/cdn/shop/products/English_Spinach__67562_425x.jpg?v=1607938113",
        stock: 1,
        description: "Bayam hijau yang bergizi, cocok untuk salad dan masakan. Kaya antioksidan dan vitamin.",
    },
    {
        id: 3,
        name: "Edamame 1 Kg",
        category: "Alami",
        price: 24900,
        image: "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/0LaNSoINv6RtFWYxco8i4/original/057936200_1604487548-Manfaat-Kacang-Edamame-untuk-Kecantikan-shutterstock_718434649.jpg",
        stock: 0,
        description: "Edamame yang segar dan alami, ideal sebagai camilan sehat kaya protein.",
    },
    {
        id: 4,
        name: "Asparagus Alami Sesa 250 Gr",
        category: "Alami",
        price: 42900,
        image: "https://5.imimg.com/data5/SELLER/Default/2021/12/NC/IE/AC/140389828/jivit-asparagus-large-leaf-500x500.jpeg",
        stock: Math.floor(Math.random() * 20),
        description: "Asparagus alami yang renyah dan kaya nutrisi, cocok untuk makanan bergizi.",
    },
    {
        id: 5,
        name: "Wortel Organik 500 Gr",
        category: "Organik",
        price: 15900,
        image: "https://leafy.id/wp-content/uploads/2019/12/p9.jpg",
        stock: Math.floor(Math.random() * 20),
        description: "Wortel segar dan organik, sumber vitamin A dan serat yang baik.",
    },
    {
        id: 6,
        name: "Tomat Segar 300 Gr",
        category: "Hidroponik",
        price: 17900,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg",
        stock: 0,
        description: "Tomat segar hidroponik dengan rasa manis alami, cocok untuk berbagai masakan.",
    },
    {
        id: 7,
        name: "Paprika Organik 200 Gr",
        category: "Organik",
        price: 19900,
        image: "https://cdn.britannica.com/12/147312-050-BEC6A59E/Bell-peppers.jpg",
        stock: Math.floor(Math.random() * 20),
        description: "Paprika organik yang renyah dan segar, penuh dengan vitamin C dan antioksidan.",
    },
    {
        id: 8,
        name: "Timun Alami 400 Gr",
        category: "Alami",
        price: 13900,
        image: "https://specialtyproduce.com/sppics/385.png",
        stock: 0,
        description: "Timun alami yang segar, ideal untuk menjaga hidrasi tubuh dan kaya akan serat.",
    },
    {
        id: 9,
        name: "Kangkung Segar 300 Gr",
        category: "Alami",
        price: 24900,
        image: "https://asset.kompas.com/crops/hiHp3YQ3thc3pKgLg-rUdaI-OR8=/0x0:1000x667/750x500/data/photo/2023/06/02/6479fd6c38b10.jpg",
        stock: Math.floor(Math.random() * 20),
        description: "Kangkung segar dengan rasa yang khas, baik untuk kesehatan mata dan sistem pencernaan.",
    },
    {
        id: 10,
        name: "Selada Organik 200 Gr",
        category: "Organik",
        price: 12900,
        image: "https://media.newyorker.com/photos/5b6b08d3a676470b4ea9b91f/4:3/w_1920,h_1440,c_limit/Rosner-Lettuce.jpg ",
        stock: Math.floor(Math.random() * 20),
        description: "Selada organik yang segar dan renyah, cocok untuk salad dan menu sehat lainnya.",
    },
    {
        id: 11,
        name: "Kale Hidroponik 250 Gr",
        category: "Hidroponik",
        price: 21900,
        image: "https://cdn1-production-images-kly.akamaized.net/SCV68Bza6ZegWzOmTv2-WgSUbSM=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2814106/original/062756400_1558620545-iStock-638451058.jpg",
        stock: 0,
        description: "Kale hidroponik kaya nutrisi, tinggi serat, vitamin, dan mineral untuk diet seimbang.",
    },
    {
        id: 12,
        name: "Wortel Alami 500 Gr",
        category: "Alami",
        price: 15900,
        image: "https://5.imimg.com/data5/SELLER/Default/2022/6/KH/AX/XT/83716376/1-500x500.png",
        stock: Math.floor(Math.random() * 20),
        description: "Wortel alami kaya akan beta-karoten, ideal untuk kesehatan mata dan kulit.",
    },
    {
        id: 13,
        name: "Zukini Organik 300 Gr",
        category: "Organik",
        price: 22900,
        image: "https://images.tokopedia.net/img/cache/700/product-1/2018/8/30/37313461/37313461_65ce0650-5d77-45dd-88cf-fff01b9c1189_843_583.jpg",
        stock: Math.floor(Math.random() * 20),
        description: "Zukini organik segar dengan tekstur renyah, cocok untuk tumis atau salad.",
    },
    {
        id: 14,
        name: "Bawang Merah Segar 500 Gr",
        category: "Alami",
        price: 19900,
        image: "https://produits.bienmanger.com/36700-0w0h0_Organic_Red_Onion_From_Italy.jpg",
        stock: Math.floor(Math.random() * 20),
        description: "Bawang merah segar dengan aroma khas, ideal sebagai bumbu masakan.",
    },
    {
        id: 15,
        name: "Tomat Ceri Hidroponik 250 Gr",
        category: "Hidroponik",
        price: 25900,
        image: "https://cdn.shopify.com/s/files/1/0597/9376/8608/files/hydroponic_cherry_tomatoes_system_1024x1024.jpg?v=1685696663",
        stock: Math.floor(Math.random() * 20),
        description: "Tomat ceri hidroponik yang manis dan segar, cocok untuk salad dan garnish.",
    },
    {
        id: 16,
        name: "Kentang Alami 1 Kg",
        category: "Alami",
        price: 29900,
        image: "https://iloveorganicgirl.com/wp-content/uploads/2015/11/organicgirl-baby-spinach-5oz.png",
        stock: 0,
        description: "Kentang alami serbaguna dengan kandungan karbohidrat tinggi, cocok untuk berbagai hidangan.",
    },
    {
        id: 17,
        name: "Bayam Organik 200 Gr",
        category: "Organik",
        price: 14900,
        image: "https://www.gardenoflife.com/media/2016/06/organic-spinach-499x392.jpg",
        stock: Math.floor(Math.random() * 20),
        description: "Bayam organik yang segar dan kaya nutrisi, baik untuk kesehatan tubuh secara keseluruhan.",
    },
    {
        id: 18,
        name: "Buncis Segar 300 Gr",
        category: "Alami",
        price: 19900,
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2014/11/green-beans-3.jpg",
        stock: Math.floor(Math.random() * 20),
        description: "Buncis segar dengan rasa renyah, kaya serat, baik untuk kesehatan pencernaan.",
    },
    {
        id: 19,
        name: "Selada Butterhead Hidroponik 150 Gr",
        category: "Hidroponik",
        price: 15900,
        image: "https://yodeli.in/cdn/shop/products/truganic-organic-green-leafy-vegetables-hydroponic-butterhead-lettuce.jpg?v=1614567537",
        stock: 0,
        description: "Selada butterhead hidroponik yang lembut dan segar, ideal untuk salad.",
    },
    {
        id: 20,
        name: "Sawi Bok Choy Organik 200 Gr",
        category: "Organik",
        price: 16900,
        image: "https://dinosaofood.co/wp-content/uploads/2022/02/BokChoy-Thumbnail-OG.png",
        stock: Math.floor(Math.random() * 20),
        description: "Bok choy organik yang kaya vitamin C dan kalsium, baik untuk kesehatan tulang.",
    }
];

const ProductList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [showDiscountedOnly, setShowDiscountedOnly] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [whitelistItems, setWhitelistItems] = useState([]);

    const itemsPerPage = 16;

    const handleFilterChange = (category) => {
        if (selectedFilters.includes(category)) {
            setSelectedFilters(
                selectedFilters.filter((filter) => filter !== category)
            );
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
            selectedFilters.length === 0 ||
            selectedFilters.includes(product.category);
        const matchesDiscount = !showDiscountedOnly || product.discountedPrice;
        return matchesCategory && matchesDiscount;
    });

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
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
        navigate('/wishlist'); // Navigate to Wishlist page
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
                                {["Organic", "Natural", "Hydroponics"].map(
                                    (category) => (
                                        <label
                                            key={category}
                                            className="inline-flex items-center mb-2"
                                        >
                                            <input
                                                type="checkbox"
                                             className="form-checkbox h-4 w-4 text-green-600"
                                                checked={selectedFilters.includes(
                                                    category
                                                )}
                                                onChange={() =>
                                                    handleFilterChange(category)
                                                }
                                            />
                                            <span className="ml-2 text-gray-700">
                                                {category}
                                            </span>
                                        </label>
                                    )
                                )}
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
                                <span className="ml-2 text-gray-700">
                                    Show Discounted Only
                                </span>
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
                                            <h3 className="font-semibold text-md text-gray-800">
                                                {product.name}
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
                                                    whitelistItems.includes(
                                                        product.id
                                                    )
                                                        ? "bg-red-500 hover:bg-red-600"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    addToWhitelist(product)
                                                }
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
