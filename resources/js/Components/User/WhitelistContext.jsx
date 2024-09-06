import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import WhitelistsController from './WhitelistsController'; // Pastikan path benar

const SukaContent = () => {
    const { favorites } = usePage().props;  // Mengambil data dari backend yang dikirim lewat Inertia

    return (
        <div className="product-list">
            {favorites.map((product) => (
                <div key={product.id} className="product-item">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <WhitelistController productId={product.id} /> {/* Sesuaikan nama komponen */}
                </div>
            ))}
        </div>
    );
};

export default SukaContent; // Perbaiki nama ekspor default sesuai dengan nama komponen
