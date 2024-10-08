import React, { useEffect, useRef } from 'react';
import Banner from './Banner'; // Pastikan path ini benar

const SidebarUser = ({ isOpen, toggleSidebar, cartItems }) => {
  const sidebarRef = useRef();

  // Tutup sidebar jika pengguna mengklik di luar area sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <>
      {/* Overlay untuk mendeteksi klik di luar sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
      
      <div
        ref={sidebarRef}
        className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={toggleSidebar}
          >
            <img
              src="https://img.icons8.com/?size=100&id=YXG86oegZMMh&format=png&color=FFFFFF"
              alt="Icon Close"
              className="h-8 w-8"
            />
          </button>

          <h2 className="text-xl font-semibold mt-4">Cart</h2>
          {cartItems.length > 0 ? (
            <ul className="mt-2">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center mt-2">
                  <span>{item.name}</span>
                  <span>Rp. {item.discountedPrice || item.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-gray-500">No items in the cart.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SidebarUser;
