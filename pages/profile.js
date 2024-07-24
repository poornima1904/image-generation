// pages/profile.js
import React from 'react';
import NavBar from '../components/NavBar';
import Login from '../components/Login';

const ProfilePage = () => {
  return (
    <div>
      <NavBar />
      <Login />
      <div className="container mx-auto text-center mt-10">
        <h1 className="text-3xl font-bold">User Profile</h1>
      </div>
    </div>
  );
};

export default ProfilePage;
