<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Product; // Pastikan Anda memiliki model Product
use App\Models\User; // Pastikan Anda memiliki model User

class WhitelistsController extends Controller
{
    // Fungsi untuk menampilkan daftar produk favorit (whitelist)
    public function index()
    {
        if (!Auth::check()) {
            return redirect()->route('login')->with('error', 'Anda harus login terlebih dahulu.');
        }

        $user = Auth::user();  // Mendapatkan user yang sedang login

        // Ambil produk favorit user dari database (asumsi ada relasi favorites)
        $favorites = $user->favorites()->get();

        // Kirim data favorit ke frontend menggunakan Inertia
        return Inertia::render('User/Whitelist', [
            'favorites' => $favorites,
        ]);
    }

    // Fungsi untuk toggle (menambah/menghapus) produk dari whitelist
    public function toggleFavorite(Request $request)
    {
        $request->validate([
            'product_id' => 'required|integer|exists:products,id', // Pastikan ID produk valid
        ]);

        $productId = $request->input('product_id');
        $user = Auth::user();  // Mendapatkan user yang sedang login

        // Toggle favorit
        $user->favorites()->toggle($productId);

        // Cek apakah produk sekarang ada di daftar favorit
        $isFavorite = $user->favorites()->where('product_id', $productId)->exists();
        $message = $isFavorite ? 'Produk ditambahkan ke favorit' : 'Produk dihapus dari favorit';

        return response()->json(['success' => true, 'message' => $message]);
    }
}
