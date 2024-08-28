import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

const images = [
    "https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg",
    "https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg",
];

function Banner() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Mengatur interval untuk mengganti gambar setiap 1 detik
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        // Membersihkan interval saat komponen unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[80vh] max-w-7xl mx-auto px-4 overflow-hidden">
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
                    <img
                        src={src}
                        alt={`Banner ${index}`}
                        className="absolute inset-0 object-cover w-full h-full rounded-lg"
                    />
                </Transition>
            ))}
        </div>
    );
}

export default Banner;
