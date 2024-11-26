import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard({ auth }) {
    const userName = auth.user ? auth.user.name : 'Pengguna';

    // Data untuk diagram
    const data = {
        labels: ['Produk Sayuran', 'Penjualan', 'Pengguna Baru'],
        datasets: [
            {
                label: 'Statistik',
                data: [20, 5000, 15], // Ganti dengan data yang sesuai
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)', // Biru
                    'rgba(255, 99, 132, 0.6)', // Merah
                    'rgba(75, 192, 192, 0.6)', // Hijau
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)', // Biru
                    'rgba(255, 99, 132, 1)', // Merah
                    'rgba(75, 192, 192, 1)', // Hijau
                ],
                borderWidth: 2,
                hoverBackgroundColor: [
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                ],
                hoverBorderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                    },
                },
            },
            title: {
                display: true,
                text: 'Statistik E-Commerce Sayuran',
                font: {
                    size: 18,
                },
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah',
                    font: {
                        size: 14,
                    },
                },
                ticks: {
                    color: '#333',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Kategori',
                    font: {
                        size: 14,
                    },
                },
                ticks: {
                    color: '#333',
                },
            },
        },
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard Admin E-Commerce Sayuran
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-semibold">Selamat datang, {userName}!</h3>
                            <p className="mt-2">Anda telah masuk! Berikut adalah ringkasan dashboard Anda</p>

                            {/* Diagram */}
                            <div className="mt-6">
                                <Bar data={data} options={options} />
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg font-semibold">Kelola Data</h3>
                                <ul className="mt-4 space-y-2">
                                    <li>
                                        <a href="/data-barang" className="text-blue-500 hover:underline">Kelola Data Barang</a>
                                    </li>
                                    <li>
                                        <a href="/data-supplier" className="text-blue-500 hover:underline">Kelola Data Supplier</a>
                                    </li>
                                    <li>
                                        <a href="/data-pelanggan" className="text-blue-500 hover:underline">Kelola Data Pelanggan</a>
                                    </li>
                                    <li>
                                        <a href="/data-barang-masuk" className="text-blue-500 hover:underline">Kelola Data Barang Masuk</a>
                                    </li>
                                    <li>
                                        <a href="/data-barang-keluar" className="text-blue-500 hover:underline">Kelola Data Barang Keluar</a>
                                    </li>
                                    <li>
                                        <a href="/data-penjualan" className="text-blue-500 hover:underline">Kelola Data Penjualan</a>
                                    </li>
                                    <li>
                                        <a href="/data-stok-barang" className="text-blue-500 hover:underline">Kelola Data Stok Barang</a>
                                    </li>
                                    <li>
                                        <a href="/data-akun" className="text-blue-500 hover:underline">Kelola Data Akun</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}