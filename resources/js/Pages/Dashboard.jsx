import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const userName = auth.user ? auth.user.name : 'Pengguna';

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard E-Commerce Sayuran
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-semibold">Selamat datang, Admin!</h3>
                            <p className="mt-2">Anda telah masuk! Berikut adalah ringkasan dashboard Anda</p>
                            
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-green-100 dark:bg-green-700 p-4 rounded-lg shadow-md">
                                    <h4 className="font-bold">Total Produk Sayuran</h4>
                                    <p>20</p> {/* Ganti dengan data yang sesuai */}
                                </div>
                                <div className="bg-yellow-100 dark:bg-yellow-700 p-4 rounded-lg shadow-md">
                                    <h4 className="font-bold">Total Penjualan</h4>
                                    <p>$5000</p> {/* Ganti dengan data yang sesuai */}
                                </div>
                                <div className="bg-blue-100 dark:bg-blue-700 p-4 rounded-lg shadow-md">
                                    <h4 className="font-bold">Pengguna Baru</h4>
                                    <p>15</p> {/* Ganti dengan data yang sesuai */}
                                </div>
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

                            <div className="mt-8">
                                <h3 className="text-lg font-semibold">Daftar Produk Sayuran Terbaru</h3>
                                <table className="min-w-full mt-4 bg-white dark:bg-gray-800">
                                    <thead>
                                        <tr className="w-full bg-gray-200 dark:bg-gray-700">
                                            <th className="py-2 px-4 border-b">Nama Produk</th>
                                            <th className="py-2 px-4 border-b">Harga</th>
                                            <th className="py-2 px-4 border-b">Stok</th>
                                            <th className="py-2 px-4 border-b">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-2 px-4 border-b">Tomat</td>
                                            <td className="py-2 px-4 border-b">$2.00</td>
                                            <td className="py-2 px-4 border-b">50</td>
                                            <td className="py-2 px-4 border-b">
                                                <button className="text-blue-500">Edit</button>
                                                <button className="text-red-500 ml-2">Hapus</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-b">Wortel</td>
                                            <td className="py-2 px-4 border-b">$1.50</td>
                                            <td className="py-2 px-4 border-b">30</td>
                                            <td className="py-2 px-4 border-b">
                                                <button className="text-blue-500">Edit</button>
                                                <button className="text-red-500 ml-2">Hapus</button>
                                            </td>
                                        </tr>
                                        {/* Tambahkan lebih banyak produk sesuai kebutuhan */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}