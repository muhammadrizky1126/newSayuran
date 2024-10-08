import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import NavbarAdmin from '@/Components/Admin/NavbarAdmin';

const UserList = ({ users }) => {
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this user?')) {
            Inertia.delete(route('admin.users.destroy', id));
        }
    };

    return (
        <div>
            <NavbarAdmin />
            <div className="container mx-auto mt-8">
                <h1 className="text-2xl font-bold">User Management</h1>
                <table className="min-w-full table-auto mt-6">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{user.name}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2">
                                    <a
                                        href={route('admin.users.edit', user.id)}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </a>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="text-red-500 hover:underline ml-4"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;
