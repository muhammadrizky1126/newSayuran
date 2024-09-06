import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import NavbarUser from '@/Components/User/NavbarUser';

const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/register'); // Mengirim data registrasi ke rute Laravel
    };

    return (
        <div>
            <NavbarUser />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center">Daftar</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Nama
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                required
                            />
                            {errors.name && <div className="text-red-600">{errors.name}</div>}
                        </div>
                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                required
                            />
                            {errors.email && <div className="text-red-600">{errors.email}</div>}
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                required
                            />
                            {errors.password && <div className="text-red-600">{errors.password}</div>}
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                                Konfirmasi Password
                            </label>
                            <input
                                id="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                required
                            />
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                            >
                                {processing ? 'Registering...' : 'Daftar'}
                            </button>
                        </div>
                    </form>
                    <p className="mt-6 text-sm text-center text-gray-600">
                        Sudah punya akun? <a href="/login" className="text-teal-600 hover:underline">Masuk</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;