import React, { useState } from "react";
import Wishlist from "./Wishlist"; // Pastikan jalur impor benar
import { Inertia } from '@inertiajs/inertia';

const App = () => {
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);

    const toggleWhitelist = () => {
        // Jika wishlist terbuka, kunjungi halaman utama
        if (isWishlistOpen) {
            Inertia.visit('http://127.0.0.1:8000/'); // Pindah ke URL yang diinginkan
        } else {
            setIsWishlistOpen(true); // Jika tidak terbuka, buka wishlist
        }
    };

    const wishlistItems = [
        { id: 1, name: "Item 1", price: "$10", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Item 2", price: "$20", image: "https://via.placeholder.com/150" },
    ];

    return (
        <div>
            <button onClick={toggleWhitelist}>
                {isWishlistOpen ? "Close Wishlist" : "Open Wishlist"}
            </button>

            {isWishlistOpen && (
                <Wishlist
                    isOpen={isWishlistOpen}
                    toggleWhitelist={toggleWhitelist}
                    wishlistItems={wishlistItems}
                />
            )}
        </div>
    );
};

export default App;
