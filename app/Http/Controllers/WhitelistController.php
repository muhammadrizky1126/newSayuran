<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Whitelist;

class WhitelistController extends Controller
{
    // Menampilkan daftar whitelist dengan Inertia
    public function index()
    {
        $whitelists = Whitelist::all(); // Ambil semua data dari model Whitelist
        return Inertia::render('WhitelistPage', [
            'whitelistData' => $whitelists, // Kirimkan data whitelist ke frontend melalui Inertia
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
}
