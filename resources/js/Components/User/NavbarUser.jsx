import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import axios from 'axios';
import SidebarUser from './SidebarUser';

const NavbarUser = ({ onSearch }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const handleSearchChange = (e) => {
<<<<<<< HEAD
        onSearch(e.target.value);
    };

    const handleFavoriteClick = async () => {
        console.log('Favorite button clicked');
        try {
            const response = await axios.post('/whitelist', { product_id: 1 });
            if (response.data.success) {
                setIsFavorited((prev) => !prev); // Toggle favorite status
=======
        onSearch(e.target.value); // Pass search value to parent component
    };

    const handleFavoriteClick = async () => {
        try {
            const response = await axios.post('/favorites', { product_id: 1 });
            if (response.data.success) {
                setIsFavorited(!isFavorited);
>>>>>>> 136ad329314431edea17d2015b442b578eee6368
            }
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    };

<<<<<<< HEAD
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const handleAddToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    };

    const removeFromCart = (index) => {
        setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    const updateItemQuantity = (index, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item, i) =>
                i === index ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const subtotal = cartItems.reduce(
        (acc, item) => acc + (item.discountedPrice || item.price) * item.quantity,
        0
    );
=======
    const handleAddToCart = async (product) => {
        try {
            const response = await axios.post('/cart/add', { product_id: product.id, quantity: 1 });
            if (response.data.success) {
                setCartItems(prevItems => [...prevItems, product]);
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
>>>>>>> 136ad329314431edea17d2015b442b578eee6368

    return (
        <>
            <div>
                <nav className="bg-white shadow w-full fixed top-0 left-0 z-50">
                    <div className="w-full bg-teal-500 flex flex-col md:flex-row justify-between items-center p-5">
                        <div className="flex items-center space-x-4">
<<<<<<< HEAD
                            <span className="text-5xl font-bold text-white">sesa.id</span>
=======
                        <Link href="/">
  <span className="text-5xl font-bold text-white text-center md:text-left">sesa.id</span>
</Link>
>>>>>>> 136ad329314431edea17d2015b442b578eee6368
                            <div className="border-r border-white h-8"></div>
                            <div className="flex flex-col items-center space-y-1">
                                <div className="flex items-center space-x-2">
                                    <img
                                        src="https://img.icons8.com/?size=100&id=LwCcDAb8qdY1&format=png&color=FFFFFF"
                                        alt="WhatsApp Icon"
                                        className="h-6 w-6"
                                    />
                                    <span className="text-white font-medium">WhatsApp CS</span>
                                </div>
                                <span className="text-sm text-white">+62 812-3456-7890</span>
                            </div>
                        </div>

                        <div className="flex-1 flex justify-center mt-4 md:mt-0">
                            <div className="relative w-full max-w-md">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="px-4 py-2 rounded-full border border-gray-300 pl-10 w-full"
                                    onChange={handleSearchChange}
                                />
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <img
                                        src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000"
                                        alt="Search Icon"
                                        className="h-5 w-5 text-gray-500"
                                    />
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 mt-4 md:mt-0">
                            <button
                                onClick={handleFavoriteClick}
                                className={`text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium ${isFavorited ? 'bg-yellow-500' : ''}`}
                            >
                                <img
                                    src="https://img.icons8.com/?size=100&id=86721&format=png&color=FFFFFF"
<<<<<<< HEAD
                                    alt="Favorite Icon"
=======
                                    alt="Icon Favorit"
>>>>>>> 136ad329314431edea17d2015b442b578eee6368
                                    className="h-8 w-8"
                                />
                            </button>
                            <button
                                onClick={toggleSidebar}
                                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                <img
                                    src="https://img.icons8.com/?size=100&id=15893&format=png&color=FFFFFF"
<<<<<<< HEAD
                                    alt="Cart Icon"
                                    className="h-8 w-8"
                                />
                            </button>
                            <Link href="/login" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                                <img
                                    src="https://img.icons8.com/?size=100&id=YXG86oegZMMh&format=png&color=FFFFFF"
                                    alt="Login Icon"
=======
                                    alt="Icon Cart"
                                    className="h-8 w-8"
                                />
                            </button>

                            <Link href="/login" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                                <img
                                    src="https://img.icons8.com/?size=100&id=YXG86oegZMMh&format=png&color=FFFFFF"
                                    alt="Icon Login"
>>>>>>> 136ad329314431edea17d2015b442b578eee6368
                                    className="h-8 w-8"
                                />
                            </Link>
                        </div>
                    </div>
                </nav>

                <div className="h-28"></div>
<<<<<<< HEAD
            </div>

            <SidebarUser
                isOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateItemQuantity={updateItemQuantity}
                discount={0}
                subtotal={subtotal}
            />
=======

                <SidebarUser isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} cartItems={cartItems} />
            </div>
>>>>>>> 136ad329314431edea17d2015b442b578eee6368
        </>
    );
};

export default NavbarUser;
