<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FavoriteController;
use Inertia\Inertia;
use App\Http\Controllers\WhitelistController;

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
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Rute yang memerlukan autentikasi
Route::middleware('auth')->group(function () {
    // Profile routes
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Whitelist routes
    Route::get('/whitelist', [WhitelistController::class, 'index'])->name('whitelist.index');
    Route::post('/toggle-favorite', [WhitelistController::class, 'toggleFavorite'])->name('whitelist.toggleFavorite');
});

// Route untuk login
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);

// Route untuk registrasi
Route::get('/register', [RegisteredUserController::class, 'create'])->name('register');
Route::post('/register', [RegisteredUserController::class, 'store']);

// Mengimpor route autentikasi lainnya
require __DIR__.'/auth.php';

// Route untuk halaman Wishlist
// Route::get('/wishlist', function () {
//     return Inertia::render('js/component/user/Wishlist'); // Sesuaikan dengan path yang benar
// })->middleware(['auth'])->name('wishlist');
