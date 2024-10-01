import React, { useState } from "react";

const Wishlist = () => {
  // State untuk menyimpan wishlist items
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Paprika Merah Organik 150 -200 Gr",
      price: "Rp 39,900",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Sesa Bengkuang 1 Kg",
      price: "Rp 21,900",
      image: "https://via.placeholder.com/150",
    },
  ]);

  // Fungsi untuk menambah item baru
  const addNewItem = () => {
    // Logika untuk menambah item baru
    alert("Fitur menambah item baru belum diimplementasikan.");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      {/* Header */}
      <h2 style={{ textAlign: "center" }}>My Wishlist</h2>

      {/* Favorites Section */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h3>FAVORITES <span style={{ color: "green" }}>{wishlistItems.length}</span></h3>
        <button onClick={addNewItem} style={{ padding: "10px 15px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
          + ADD A NEW LIST
        </button>
      </div>

      {/* Share Buttons */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <span>SHARE: </span>
        <button style={{ margin: "0 5px" }}>Link</button>
        <button style={{ margin: "0 5px" }}>Email</button>
        <button style={{ margin: "0 5px" }}>Facebook</button>
        <button style={{ margin: "0 5px" }}>Twitter</button>
        <button style={{ margin: "0 5px" }}>Pinterest</button>
      </div>

      {/* Wishlist Items */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {wishlistItems.length > 0 ? (
          wishlistItems.map(item => (
            <div key={item.id} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px", width: "200px", textAlign: "center", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
              <img src={item.image} alt={item.name} style={{ width: "100%", borderRadius: "10px" }} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>
          ))
        ) : (
          <div style={{ width: "100%", textAlign: "center" }}>
            <h3>FAVORITES</h3>
            <p>This list is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
