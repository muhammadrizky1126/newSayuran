<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Whitelist;

class WhitelistsController extends Controller
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
        $validatedData = $request->validate([
            'ip_address' => 'required|ip|unique:whitelists',
        ]);

        $whitelist = Whitelist::create($validatedData);

        return response()->json($whitelist, 201);
    }

    // Menghapus entry dari whitelist
    public function destroy($id)
    {
        $whitelist = Whitelist::find($id);

        if (!$whitelist) {
            return response()->json(['message' => 'Whitelist not found'], 404);
        }

        $whitelist->delete();

        return response()->json(null, 204);
    }
}
