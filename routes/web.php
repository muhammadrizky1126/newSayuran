<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\LoginController;
<<<<<<< HEAD
use App\Http\Controllers\Auth\RegisterController;
=======
use App\Http\Controllers\Auth\RegisteredUserController;
>>>>>>> 136ad329314431edea17d2015b442b578eee6368
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FavoriteController;
use Inertia\Inertia;
use App\Http\Controllers\WhitelistController;

<<<<<<< HEAD
// Home route
=======
// Route untuk halaman beranda
>>>>>>> 136ad329314431edea17d2015b442b578eee6368
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

<<<<<<< HEAD
// Dashboard route
=======
// Route untuk dashboard yang memerlukan autentikasi dan verifikasi email
>>>>>>> 136ad329314431edea17d2015b442b578eee6368
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

<<<<<<< HEAD
// Authenticated routes
=======
// Route yang memerlukan autentikasi
>>>>>>> 136ad329314431edea17d2015b442b578eee6368
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Whitelist routes
    Route::get('/whitelist', [WhitelistController::class, 'index'])->name('whitelist.index');
    Route::post('/whitelist/toggle', [WhitelistController::class, 'toggleFavorite'])->name('whitelist.toggle');
});

<<<<<<< HEAD
// Authentication routes
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);

// Registration routes
Route::get('/register', [RegisterController::class, 'showRegisterForm'])->name('register');
Route::post('/register', [RegisterController::class, 'register']);


Route::middleware(['auth'])->group(function () {
    Route::get('/whitelist', [WhitelistController::class, 'index'])->name('whitelist.index');
    Route::post('/toggle-favorite', [WhitelistController::class, 'toggleFavorite'])->name('whitelist.toggleFavorite');
});
=======
// Route untuk login
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);

// Route untuk registrasi
Route::get('/register', [RegisteredUserController::class, 'create'])->name('register');
Route::post('/register', [RegisteredUserController::class, 'store']);

Route::post('/favorites', [FavoriteController::class, 'store'])->name('favorites.store');

// Mengimpor route autentikasi lainnya
require __DIR__.'/auth.php';
>>>>>>> 136ad329314431edea17d2015b442b578eee6368
