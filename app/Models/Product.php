<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'categories_id',
        'product_name',
        'weight_product',
        'price',
        'stock'
    ];


    public function categories()
    {
        return $this->belongsTo(Categories::class, 'category_id');
    }


    protected $casts = [
        'price' => 'integer',
        'weight_product' => 'integer',
        'stock' => 'integer',
    ];

    public function users()
{
    return $this->belongsToMany(User::class, 'favorites');
}
}


