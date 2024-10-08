import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {/* <h3 className="text-lg font-semibold">Welcome back, {auth.user.name}!</h3> */}
                            <p className="mt-2">You’re logged in! Here’s what you can do:</p>
                            
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                                    <h4 className="font-bold">Total Products</h4>
                                    <p>100</p> {/* Ganti dengan data yang sesuai */}
                                </div>
                                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                                    <h4 className="font-bold">Total Sales</h4>
                                    <p>$5000</p> {/* Ganti dengan data yang sesuai */}
                                </div>
                                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                                    <h4 className="font-bold">New Users</h4>
                                    <p>15</p> {/* Ganti dengan data yang sesuai */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
