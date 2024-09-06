import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

const images = [
    "https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg",
<<<<<<< HEAD
    "https://nibble-images.b-cdn.net/nibble/original_images/jakarta_buah_duta_buah_6e6a92c106.jpg"
=======
    "https://static.vecteezy.com/system/resources/previews/047/390/694/non_2x/farmers-market-flyer-design-with-cartoon-vegetables-manga-style-poster-flat-design-advertising-poster-card-banner-leaflet-promo-web-page-farmers-market-concept-vector.jpg",
>>>>>>> 136ad329314431edea17d2015b442b578eee6368
];

function Banner() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

<<<<<<< HEAD
    // Mengatur interval untuk mengganti gambar setiap 4 detik
=======
    // Set interval to change image every 4 seconds
>>>>>>> 136ad329314431edea17d2015b442b578eee6368
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[80vh] max-w-7xl mx-auto px-4 overflow-hidden mt-[var(--navbar-height)]">
            {images.map((src, index) => (
                <Transition
                    key={index}
                    show={currentImageIndex === index}
                    enter="transform transition duration-1000 ease-in-out"
                    enterFrom="translate-x-full opacity-0"
                    enterTo="translate-x-0 opacity-100"
                    leave="transform transition duration-1000 ease-in-out"
                    leaveFrom="translate-x-0 opacity-100"
                    leaveTo="-translate-x-full opacity-0"
                >
                    <div className="absolute inset-0">
                        <img
                            src={src}
                            alt={`Banner ${index}`}
                            className="object-cover w-full h-full rounded-lg"
                        />
                        {index === 0 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h1 className="text-4xl md:text-6xl text-white font-bold shadow-lg">
<<<<<<< HEAD
                                    Selamat Datang Di Toko Sayur Segarku
=======
                                    Welcome to Our Shop
>>>>>>> 136ad329314431edea17d2015b442b578eee6368
                                </h1>
                            </div>
                        )}
                    </div>
                </Transition>
            ))}
        </div>
    );
}

export default Banner;
