<?php


use App\Http\Controllers\ProfileController;

use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use App\Http\Controllers\WhitelistController;


use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;
// Home route
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Dashboard route
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Authenticated routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Authentication routes
// Rute untuk menampilkan form login
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');

// Rute untuk menangani proses login
Route::post('/login', [LoginController::class, 'login']);
// Route::get('/register', [RegisterController::class, 'showRegisterForm'])->name('register');
// Route::post('/register', [RegisterController::class, 'register']);

// Include auth routes
// require _DIR_ . '/auth.php';


Route::get('/whitelist', [WhitelistController::class, 'index'])->name('whitelist.index');
Route::post('/whitelist', [WhitelistController::class, 'store'])->name('whitelist.store');

// Route::get('/whitelist', [WhitelistController::class, 'index'])->name('whitelist');
