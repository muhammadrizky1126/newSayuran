import React from 'react';
import PropTypes from 'prop-types';

const SidebarUser = ({
  isOpen,
  toggleSidebar,
  cartItems = [],
  favorites = [],
  removeFromCart,
  updateItemQuantity,
  removeFromFavorites,
  discount = 0,
  subtotal = 0
}) => {
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
    overflowY: 'auto',
  };

  return (
    <div style={sidebarStyle}>
      <button
        onClick={toggleSidebar}
        className="text-red-500 font-bold mb-4"
      >
        Lanjutkan belanja
      </button>

      <h2 className="text-lg font-semibold mb-4">Pesanan Anda</h2>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index} className="border-b border-gray-200 py-2">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-sm text-red-500">
                    Rp. {item.discountedPrice || item.price} <span className="line-through text-gray-500">Rp. {item.price}</span>
                  </p>
                </div>
                <div className="flex items-center ml-auto">
                  <button
                    onClick={() => updateItemQuantity(index, item.quantity - 1)}
                    className="bg-green-500 text-white font-bold px-2 py-1 mr-2"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateItemQuantity(index, item.quantity + 1)}
                    className="bg-green-500 text-white font-bold px-2 py-1 ml-2"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 ml-4"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500">Keranjang kosong</p>
        )}
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-4">Favorit</h2>
      <ul>
        {favorites.length === 0 ? (
          <p className="text-gray-500">Tidak ada produk favorit</p>
        ) : (
          favorites.map((item, index) => (
            <li key={index} className="border-b border-gray-200 py-2 flex items-center">
              <p className="flex-1">{item.name}</p>
              <button
                onClick={() => removeFromFavorites(item.id)}
                className="text-red-500"
              >
                Hapus dari Favorit
              </button>
            </li>
          ))
        )}
      </ul>

      <div className="mt-4">
        <p className="text-sm text-gray-500">SEPTEMBER350K - Rp {discount.toLocaleString()}</p>
        <p className="font-semibold text-lg">Subtotal: Rp {subtotal.toLocaleString()}</p>
      </div>
    </div>
  );
};

SidebarUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    discountedPrice: PropTypes.number,
    price: PropTypes.number,
    quantity: PropTypes.number,
  })),
  favorites: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
  removeFromCart: PropTypes.func.isRequired,
  updateItemQuantity: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
  discount: PropTypes.number,
  subtotal: PropTypes.number,
};

export default SidebarUser;
