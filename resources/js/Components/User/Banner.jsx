import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

// Daftar gambar untuk banner
const images = [
    "https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg",
    "https://media.istockphoto.com/id/2119413770/id/foto/seorang-pembelanja-kontemplatif-membaca-dengan-teliti-berbagai-sayuran-di-toko-kelontong.jpg?s=2048x2048&w=is&k=20&c=ihdNaasEIG0e5yAFKKgOFs8ef-C2mL-rzjM0Vn4gkks=",
];

// Komponen Banner
function Banner() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Set interval untuk mengganti gambar setiap 4 detik
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        // Bersihkan interval ketika komponen di-unmount
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
                                    Welcome to Our Shop
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
