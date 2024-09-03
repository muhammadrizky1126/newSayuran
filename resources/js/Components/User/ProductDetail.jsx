// const ProductDetail = () => {
//     const { id } = useParams();
//     const product = products.find((product) => product.id === parseInt(id));

//     if (!product) {
//       return <div>Product not found!</div>;
//     }

//     return (
//       <div className="container mx-auto p-4 flex flex-col md:flex-row gap-8">
//         <div className="flex-1">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-96 object-cover rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="flex-1 flex flex-col justify-between">
//           <div>
//             <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
//             <p className="text-lg text-gray-700 mb-4">Brand: {product.brand}</p>
//             <div className="flex items-center mb-4">
//               <span className="text-2xl font-bold text-green-600">
//                 Rp {product.discountedPrice || product.price}
//               </span>
//               {product.discountedPrice && (
//                 <span className="text-lg line-through text-gray-500 ml-4">
//                   Rp {product.price}
//                 </span>
//               )}
//             </div>
//             <p className="text-gray-700 mb-4">{product.description}</p>
//             <p className="text-gray-600">Kapasitas: {product.capacity}</p>
//           </div>
//           <div className="flex items-center gap-4 mt-6">
//             <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
//               + Keranjang
//             </button>
//             <div className="flex items-center gap-2">
//               <button className="border border-gray-300 px-3 py-2 rounded hover:bg-gray-100">-</button>
//               <span className="text-lg">1</span>
//               <button className="border border-gray-300 px-3 py-2 rounded hover:bg-gray-100">+</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const App = () => {
//     return (
//       <Router>
//         <Routes>
//           <Route path="/" element={<ProductList />} />
//           <Route path="/product/:id" element={<ProductDetail />} />
//         </Routes>
//       </Router>
//     );
//   };
