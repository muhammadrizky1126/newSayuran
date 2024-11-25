<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the products.
     */
    public function index()
    {
        // Mengambil semua produk
        $products = Product::all();

        // Mengubah gambar menjadi base64 sebelum mengirimkan ke frontend
        $products = $products->map(function ($product) {
            // Mengonversi gambar menjadi base64
            $product->image = 'data:image/jpeg;base64,' . base64_encode($product->image); // Sesuaikan dengan format gambar (jpeg, png, dll)
            return $product;
        });

        // Mengirimkan data produk beserta gambar dalam format base64
        return response()->json($products);
    }

    /**
     * Display the specified product.
     */
    public function show(Product $product, $id) 
    {
        // Mengambil produk beserta kategori (jika ada)
        $product = Product::findOrFail($id);
        $product->load('categories');

        // Mengonversi gambar produk menjadi base64
        $product->image = 'data:image/jpeg;base64,' . base64_encode($product->image); // Sesuaikan dengan format gambar

        // Mengembalikan data produk dalam format JSON (termasuk gambar dalam base64)
        return response()->json($product);
    }

    /**
     * Show the form for creating a new product.
     */
    public function create()
    {
        // Fungsi create jika diperlukan, biasanya untuk form atau halaman
    }

    /**
     * Store a newly created product in storage.
     */
    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'product_name' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'categories_id' => 'required|integer',
            'weight_product' => 'required|integer',
            'price' => 'required|integer',
            'stock' => 'required|integer',
        ]);

        // Mengubah gambar menjadi data biner
        $imageData = file_get_contents($request->file('image'));

        // Menyimpan produk baru dan gambar dalam bentuk biner
        $product = new Product();
        $product->product_name = $request->product_name;
        $product->categories_id = $request->categories_id;
        $product->weight_product = $request->weight_product;
        $product->price = $request->price;
        $product->stock = $request->stock;
        $product->image = $imageData; // Menyimpan gambar dalam format biner (longblob)
        $product->save();

        return response()->json(['message' => 'Product created successfully!', 'product' => $product]);
    }

    /**
     * Show the form for editing the specified product.
     */
    public function edit(Product $product)
    {
        // Fungsi edit jika diperlukan, biasanya untuk form atau halaman
    }

    /**
     * Update the specified product in storage.
     */
    public function update(Request $request, Product $product)
    {
        // Validasi dan update produk, jika ada
        $request->validate([
            'product_name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'categories_id' => 'required|integer',
            'weight_product' => 'required|integer',
            'price' => 'required|integer',
            'stock' => 'required|integer',
        ]);

        // Update data produk
        $product->product_name = $request->product_name;
        $product->categories_id = $request->categories_id;
        $product->weight_product = $request->weight_product;
        $product->price = $request->price;
        $product->stock = $request->stock;

        // Jika ada gambar baru, update gambar (convert ke binary)
        if ($request->hasFile('image')) {
            $imageData = file_get_contents($request->file('image'));
            $product->image = $imageData;
        }

        $product->save();

        return response()->json(['message' => 'Product updated successfully!', 'product' => $product]);
    }

    /**
     * Remove the specified product from storage.
     */
    public function destroy(Product $product)
    {
        // Menghapus produk dan gambarnya dari database
        $product->delete();

        return response()->json(['message' => 'Product deleted successfully!']);
    }
}
