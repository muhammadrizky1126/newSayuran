import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import NavbarUser from '@/Components/User/NavbarUser';
<<<<<<< HEAD
=======
import Footer from '@/Components/User/Footer';
>>>>>>> 136ad329314431edea17d2015b442b578eee6368

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [resetEmail, setResetEmail] = useState('');
    const [resetProcessing, setResetProcessing] = useState(false);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        post('/login'); // Kirim data login ke rute Laravel
    };

    const handleForgotPasswordSubmit = (e) => {
        e.preventDefault();
        setResetProcessing(true);

        // Send password reset request to your backend
        // This is a placeholder URL; replace it with your actual route
        fetch('/password/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: resetEmail }),
        })
        .then(response => response.json())
        .then(() => {
            // Handle successful password reset request
            alert('Email for password reset has been sent.');
            setResetProcessing(false);
            setShowForgotPassword(false);
        })
        .catch(() => {
            // Handle error
            alert('Failed to send password reset email.');
            setResetProcessing(false);
        });
    };

    return (
        <div>
<<<<<<< HEAD
            <NavbarUser />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center">{showForgotPassword ? 'Forgot Password' : 'Masuk'}</h2>

=======


        <div>
        <NavbarUser />
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center">{showForgotPassword ? 'Forgot Password' : 'Masuk'}</h2>

>>>>>>> 136ad329314431edea17d2015b442b578eee6368
                    {showForgotPassword ? (
                        // Forgot Password Form
                        <form onSubmit={handleForgotPasswordSubmit}>
                            <div>
                                <label htmlFor="resetEmail" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="resetEmail"
                                    type="email"
                                    value={resetEmail}
                                    onChange={(e) => setResetEmail(e.target.value)}
                                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                    required
                                />
                            </div>
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    disabled={resetProcessing}
                                    className="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                                >
                                    {resetProcessing ? 'Sending...' : 'Send Password Reset Link'}
                                </button>
                            </div>
                            <div className="mt-4 text-center">
                                <button
                                    type="button"
                                    onClick={() => setShowForgotPassword(false)}
                                    className="text-sm text-teal-600 hover:underline"
                                >
                                    Back to Login
                                </button>
                            </div>
                        </form>
                    ) : (
                        // Login Form
                        <form onSubmit={handleLoginSubmit}>
                            <div>
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
                            <div className="flex items-center justify-between mt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowForgotPassword(true)}
                                    className="text-sm text-teal-600 hover:underline"
                                >
                                    Lupa password
                                </button>
                            </div>
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                                >
                                    {processing ? 'Logging in...' : 'Masuk'}
                                </button>
                            </div>
                        </form>
                    )}

                    {!showForgotPassword && (
                        <p className="mt-6 text-sm text-center text-gray-600">
                            Pelanggan baru? <a href="/register" className="text-teal-600 hover:underline">Daftar akun</a>
                        </p>
                    )}
                </div>
            </div>
        </div>
<<<<<<< HEAD
=======
        <Footer />
        </div>
        </div>
>>>>>>> 136ad329314431edea17d2015b442b578eee6368
    );
};

export default Login;
