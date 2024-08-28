import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="flex flex-col items-center justify-center min-h-screen py-6 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                    <div className="flex justify-center mb-6">
                        {/* Replace with your app's logo */}
                        <img src="/path/to/logo.png" alt="App Logo" className="h-12" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Log in to Your Account</h2>

                    <div className="mb-4">
                        <button className="w-full mb-3 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-800 hover:bg-gray-100">
                            Continue With Google
                        </button>
                        <button className="w-full mb-3 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-800 hover:bg-gray-100">
                            Continue With Facebook
                        </button>
                        <button className="w-full mb-3 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-800 hover:bg-gray-100">
                            Continue With Apple
                        </button>
                    </div>

                    {status && <div className="mb-4 text-sm text-green-600 text-center">{status}</div>}

                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mb-4">
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ml-2">Remember me</span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-sm text-indigo-600 hover:text-indigo-500"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>

                        <div className="flex items-center justify-center">
                            <PrimaryButton className="w-full" disabled={processing}>
                                Log in
                            </PrimaryButton>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <Link href={route('register')} className="text-sm text-indigo-600 hover:text-indigo-500">
                            New customer? Sign up for an account
                        </Link>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
