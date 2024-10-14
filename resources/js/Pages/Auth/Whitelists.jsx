import React, { useState } from "react";
import { Inertia } from '@inertiajs/inertia';

const Wishlist = ({ isOpen, toggleWhitelist, wishlistItems = [] }) => {
    // State untuk menyimpan daftar wishlist dan modal
    const [lists, setLists] = useState(wishlistItems);
    const [modal, setModal] = useState({ isOpen: false, message: "", title: "", showShare: false });

    // Fungsi untuk menambah list baru
    const addNewlist = () => {
        const newListName = prompt("Masukkan nama list baru:");
        if (newListName) {
            const newList = {
                id: lists.length + 1, // Atur ID secara otomatis
                name: newListName,
            };
            setLists([...lists, newList]);
        }
    };

    // Fungsi untuk membuka modal
    const openModal = (message, title = "Info", showShare = false) => {
        setModal({ isOpen: true, message, title, showShare });
    };

    // Fungsi untuk menutup modal
    const closeModal = () => {
        setModal({ isOpen: false, message: "", title: "", showShare: false });
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
        backgroundColor: "#ffffff",
        overflow: "hidden",
    };

    return (
        <div className='p-4' style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>My Wishlist</h2>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h3>FAVORITES <span style={{ color: "green" }}>{lists.length}</span></h3>
                <button
                    onClick={addNewlist}
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

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                {lists.length > 0 ? (
                    lists.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => openModal(`Navigating to wishlist item page for item ID: ${item.id}`, "Item Clicked")}
                            style={itemStyle}
                        >
                            <h4>{item.name}</h4>
                            <button
                                style={{
                                    padding: "8px 12px",
                                    backgroundColor: "#007bff",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                    marginTop: "10px",
                                }}
                                onClick={(e) => {
                                    e.stopPropagation(); // Mencegah event click pada item
                                    openModal(`Viewing details for ${item.name}`, "View Details", true);
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

            {/* Modal Component */}
            {modal.isOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            maxWidth: "500px",
                            textAlign: "center",
                        }}
                    >
                        <p>{modal.message}</p>
                        {modal.showShare && (
                            <div style={{ marginTop: "20px" }}>
                                <span>SHARE: </span>
                                {["Link", "Email", "Facebook", "Twitter", "Pinterest"].map((platform) => (
                                    <button key={platform} style={{ margin: "0 5px" }}>
                                        {platform}
                                    </button>
                                ))}
                            </div>
                        )}
                        <button
                            onClick={closeModal}
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "#007bff",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                marginTop: "20px",
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
