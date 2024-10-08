import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import NavbarAdmin from '@/Components/Admin/NavbarAdmin';

const EditUser = ({ user }) => {
    const { data, setData, put, processing, errors } = useForm({
        name: user.name || '',
        email: user.email || ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('admin.users.update', user.id));
    };

    return (
        <div>
            <NavbarAdmin />
            <div className="container mx-auto mt-8">
                <h1 className="text-2xl font-bold">Edit User</h1>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                        {errors.name && <div className="text-red-600">{errors.name}</div>}
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                        {errors.email && <div className="text-red-600">{errors.email}</div>}
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-4 py-2 font-bold text-white bg-teal-500 rounded-md"
                        >
                            {processing ? 'Updating...' : 'Update'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
