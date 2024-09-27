// import React, { useState } from 'react';

// const WhitelistAccess = () => {
//     const [ipAddress, setIpAddress] = useState('');
//     const [isWhitelisted, setIsWhitelisted] = useState(null);
//     const [processing, setProcessing] = useState(false);

//     const handleCheckWhitelist = (e) => {
//         e.preventDefault();
//         setProcessing(true);

//         // Kirim alamat IP ke backend untuk memeriksa whitelist
//         fetch('/check-whitelist', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ ipAddress }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             setIsWhitelisted(data.isWhitelisted);
//             setProcessing(false);
//         })
//         .catch(() => {
//             setIsWhitelisted(false);
//             setProcessing(false);
//         });
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
//                 <h2 className="text-2xl font-bold text-center">Check Whitelist Access</h2>
//                 <form onSubmit={handleCheckWhitelist}>
//                     <div>
//                         <label htmlFor="ipAddress" className="block text-sm font-medium text-gray-700">
//                             IP Address
//                         </label>
//                         <input
//                             id="ipAddress"
//                             type="text"
//                             value={ipAddress}
//                             onChange={(e) => setIpAddress(e.target.value)}
//                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
//                             required
//                         />
//                     </div>
//                     <div className="mt-6">
//                         <button
//                             type="submit"
//                             disabled={processing}
//                             className="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
//                         >
//                             {processing ? 'Checking...' : 'Check Access'}
//                         </button>
//                     </div>
//                 </form>
//                 {isWhitelisted !== null && (
//                     <div className="mt-4 text-center">
//                         {isWhitelisted ? (
//                             <p className="text-green-600">Your IP is whitelisted! You have access.</p>
//                         ) : (
//                             <p className="text-red-600">Your IP is not whitelisted. Access denied.</p>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default WhitelistAccess;
