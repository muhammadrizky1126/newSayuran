import React from 'react'; // Pastikan path ini benar
import Banner from './Banner'; // Pastikan path ini benar

const SidebarUser = ({ isOpen, toggleSidebar, cartItems }) => {
  return (
    <div
      className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <button
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          onClick={toggleSidebar}
        >
          Close
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
  );
};

export default SidebarUser;
