<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function showLoginForm()
    {
        return Inertia::render('Login');
    }

    public function login(Request $request)
    {
        // Logika untuk autentikasi
    }
}
