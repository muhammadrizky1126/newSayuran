<?php


namespace App\Http\Controllers;

use Inertia\Inertia;

class WhitelistController extends Controller
{
    public function index()
    {
        return Inertia::render('User/WhitelistPage'); // Sesuaikan jalur dengan benar
    }
}
