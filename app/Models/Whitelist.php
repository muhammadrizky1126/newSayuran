<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Whitelist extends Model
{
    use HasFactory;

    // Jika tabel di database bernama 'whitelists', pastikan untuk mendefinisikannya di sini
    protected $table = 'whitelists';
    
    // Atur kolom yang dapat diisi (mass-assignable)
    protected $fillable = ['user_id', 'product_id'];
}
