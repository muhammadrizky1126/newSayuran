import React, { useState } from "react";

const Wishlist = ({ isOpen, toggleWhitelist, wishlistItems }) => {
    const addNewItem = () => {
        alert("Fitur menambah item baru belum diimplementasikan.");
    };

    const handleItemClick = (itemId) => {
        console.log(`Clicked item with ID: ${itemId}`);
        alert(`Navigating to wishlist item page for item ID: ${itemId}`);
    };

    const itemStyle = {
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        width: "250px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        backgroundColor: "#ffffff", // Background color
        overflow: "hidden",
    };

    return (
        <div className='p-4' style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>My Wishlist</h2>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                }}
            >
                <h3>FAVORITES <span style={{ color: "green" }}>{wishlistItems.length}</span></h3>
                <button
                    onClick={addNewItem}
                    style={{
                        padding: "10px 15px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                    }}
                >
                    + ADD A NEW LIST
                </button>
            </div>

            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <span>SHARE: </span>
                {["Link", "Email", "Facebook", "Twitter", "Pinterest"].map((platform) => (
                    <button key={platform} style={{ margin: "0 5px" }}>
                        {platform}
                    </button>
                ))}
            </div>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {wishlistItems.length > 0 ? (
                    wishlistItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleItemClick(item.id)}
                            style={itemStyle}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                    width: "100%",
                                    height: "150px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                    marginBottom: "10px",
                                }}
                            />
                            <h4>{item.name}</h4>
                            <p>{item.price}</p>
                            <button
                                style={{
                                    padding: "8px 12px",
                                    backgroundColor: "#007bff",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                    marginTop: "10px",
                                }}
                            >
                                View Details
                            </button>
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
