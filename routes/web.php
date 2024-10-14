<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\WhitelistController;
use App\Http\Controllers\Admin\UserController;

// Route untuk halaman beranda
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route untuk dashboard yang memerlukan autentikasi dan verifikasi email
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'auth' => auth()->user(), // Mengirim data user untuk komponen Dashboard
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

// Rute yang memerlukan autentikasi
Route::middleware('auth')->group(function () {
    // Profile routes
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Whitelist routes

});
    Route::get('/whitelist', [WhitelistController::class, 'index'])->name('whitelist.index');
    Route::post('/toggle-favorite', [WhitelistController::class, 'toggleFavorite'])->name('whitelist.toggleFavorite');

// Route untuk halaman Wishlist
Route::get('/wishlist', function () {
    return Inertia::render('component/user/Wishlist'); // Sesuaikan path dengan benar
})->name('wishlist');

// Route untuk login
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);

// Route untuk registrasi
Route::get('/register', [RegisteredUserController::class, 'create'])->name('register');
Route::post('/register', [RegisteredUserController::class, 'store']);

// Mengimpor route autentikasi lainnya
require __DIR__.'/auth.php';

// Route untuk admin dengan middleware `isAdmin`
Route::prefix('admin')->name('admin.')->middleware(['auth', 'isAdmin'])->group(function () {
    Route::resource('users', UserController::class);
});
