<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Whitelist; // Asumsi kita punya model Whitelist

class WhitelistController extends Controller
{
    // Menampilkan daftar whitelist
    public function index()
    {
        $whitelists = Whitelist::all();
        return response()->json($whitelists);
    }

    // Menambahkan entry baru ke whitelist
    public function store(Request $request)
    {
        $request->validate([
            'ip_address' => 'required|ip|unique:whitelists',
        ]);

        $whitelist = Whitelist::create([
            'ip_address' => $request->ip_address,
        ]);

        return response()->json($whitelist, 201);
    }

    // Menghapus entry dari whitelist
    public function destroy($id)
    {
        $whitelist = Whitelist::findOrFail($id);
        $whitelist->delete();

        return response()->json(null, 204);
    }
}
