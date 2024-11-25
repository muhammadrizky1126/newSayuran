<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Whitelist;
use App\Models\Product; // Pastikan model Product ada
use Illuminate\Support\Facades\Auth;

class WhitelistController extends Controller
{
    // Menampilkan daftar whitelist dengan Inertia
    public function index()
    {
        $whitelists = Whitelist::all(); // Ambil semua data whitelist
        return Inertia::render('component/user/Whitelist', [
            'whitelistData' => $whitelists, // Kirimkan data whitelist ke frontend
        ]);
    }

    // Menambahkan entry baru ke whitelist
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'ip_address' => 'required|ip|unique:whitelists',
        ]);

        $whitelist = Whitelist::create($validatedData);

        return back(); // Mengirim respons kembali ke frontend
    }

    // Menghapus entry dari whitelist
    public function destroy($id)
    {
        $whitelist = Whitelist::find($id);

        if (!$whitelist) {
            return response()->json(['message' => 'Whitelist not found'], 404);
        }

        $whitelist->delete();

        return back(); // Mengirim respons kembali ke frontend
    }

    // Menambahkan atau menghapus produk dari favorit (toggleFavorite)
    public function toggleFavorite(Request $request)
    {
        // Pastikan user sudah login
        $user = Auth::user();
    
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);  // Jika user tidak ditemukan
        }
    
        // Validasi jika ada ID produk yang dikirim
        $request->validate([
            'product_id' => 'required|exists:products,id', // Pastikan produk ada di tabel produk
        ]);
    
        // Ambil ID produk dari request
        $productId = $request->input('product_id');
    
        // Cek apakah produk sudah ada di wishlist
        $existingWhitelist = Whitelist::where('user_id', $user->id)
                                      ->where('product_id', $productId)
                                      ->first();
    
        if ($existingWhitelist) {
            // Jika ada, hapus dari wishlist
            $existingWhitelist->delete();
            return response()->json(['message' => 'Product removed from wishlist']);
        } else {
            // Jika tidak ada, tambahkan ke wishlist
            Whitelist::create([
                'user_id' => $user->id,
                'product_id' => $productId,
            ]);
            return response()->json(['message' => 'Product added to wishlist']);
        }
    }    
}
