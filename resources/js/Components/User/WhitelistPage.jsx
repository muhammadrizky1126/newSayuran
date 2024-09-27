// // File: resources/js/Pages/WhitelistPage.jsx
// import React, { useState, useEffect } from 'react';
// import { Inertia } from '@inertiajs/inertia';


// const WhitelistPage = ({ whitelistData }) => {
//     const [ipAddress, setIpAddress] = useState('');
//     const [whitelist, setWhitelist] = useState(whitelistData);

//     const handleAddWhitelist = (e) => {
//         e.preventDefault();
//         Inertia.post('/whitelist', { ip_address: ipAddress }, {
//             onSuccess: () => {
//                 setIpAddress(''); // Clear input field
//             },
//             onError: (errors) => {
//                 console.error(errors);
//             }
//         });
//     };

//     const handleDeleteWhitelist = (id) => {
//         Inertia.delete(`/whitelist/${id}`, {
//             onSuccess: () => {
//                 setWhitelist(whitelist.filter(item => item.id !== id)); // Update state
//             },
//             onError: (errors) => {
//                 console.error(errors);
//             }
//         });
//     };

//     return (
//         <div>
//             <h1>Whitelist Management</h1>
//             <form onSubmit={handleAddWhitelist}>
//                 <input
//                     type="text"
//                     value={ipAddress}
//                     onChange={(e) => setIpAddress(e.target.value)}
//                     placeholder="Enter IP Address"
//                     required
//                 />
//                 <button type="submit">Add to Whitelist</button>
//             </form>

//             <ul>
//                 {whitelist.map((item) => (
//                     <li key={item.id}>
//                         {item.ip_address} 
//                         <button onClick={() => handleDeleteWhitelist(item.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default WhitelistPage;
