import React from 'react';

const UserProfile = ({ user }) => {
  if (!user) return null;

  return (
    <div className="user-profile">
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      {/* Anda bisa menambahkan lebih banyak informasi profil di sini */}
    </div>
  );
};
