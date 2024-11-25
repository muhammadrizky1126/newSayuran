import React from 'react';

const SidebarUser = ({ isOpen, toggleSidebar, cartItems = [] }) => {
  const sidebarStyle = {
    position: 'fixed',
    right: 0,
    top: 0,
    height: '100%',
    width: '300px',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s ease',
    zIndex: 1000,
    padding: '16px',
    overflowY: 'auto',  // Add this to enable vertical scrolling
  };

  return (
    <div style={sidebarStyle}>
      <button onClick={toggleSidebar} className="text-red-500 font-bold mb-4">
        Close
      </button>
      <h2 className="text-lg font-semibold mb-4">Cart</h2>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index} className="border-b border-gray-200 py-2">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">Rp. {item.discountedPrice || item.price}</p>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </ul>
    </div>
  );
};

export default SidebarUser;
